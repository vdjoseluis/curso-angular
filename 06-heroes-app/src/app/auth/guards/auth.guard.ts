import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable, tap } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  private checkAuthStatus(): boolean | Observable<boolean> {
    return this.authService.checkAuthentication()
      .pipe(
        tap(isAuthenticated => {
          if (!isAuthenticated) {
            this.router.navigateByUrl('/auth/login');
          }
        })
      )
  }

  canMatch: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
    return this.checkAuthStatus();
  }

  canActivate: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return this.checkAuthStatus();
  }

}