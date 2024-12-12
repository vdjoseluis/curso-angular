import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  standalone: false,

  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  public myForm = this.fb.group({
    email: ['jose@vasquez.com', [Validators.required, Validators.email]],
    password: ['contraseña', [Validators.required, Validators.minLength(6)]],
  });

  login(): void {
    const { email, password } = this.myForm.value;
    this.authService.login(email!, password!)
      .subscribe({
        next: () => this.router.navigateByUrl('/dashboard'),
        error: (message) => {
          Swal.fire('Error', message, 'error');
        }
      })
  }

}
