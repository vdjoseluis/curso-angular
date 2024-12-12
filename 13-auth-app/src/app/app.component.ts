import { Component, computed, effect, inject } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { AuthStatus } from './auth/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  public finishedAuthCheck = computed<boolean>(() => {
    if (this.authService.authStatus() === AuthStatus.CHECKING) return false;

    return true;
  });

  public authStatusChangedEffect = effect(() => {
    switch (this.authService.authStatus()) {
      case AuthStatus.CHECKING:
        return;
      case AuthStatus.AUTHENTICATED:
        this.router.navigateByUrl('/dashboard');
        return;
      case AuthStatus.NOT_AUTHENTICATED:
        this.router.navigateByUrl('/auth/login');
        return;
    }
  })
}
