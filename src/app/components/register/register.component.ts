import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // <-- IMPORTANTE
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  registerForm: FormGroup;
  successMessage = '';
  errorMessage = '';
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) return;
    this.authService.register(this.registerForm.value).subscribe({
      next: (response) => {
        this.successMessage = 'Registro exitoso, ya puedes iniciar sesión.';
        this.errorMessage = '';
        this.registerForm.reset();
        // Aquí podrías redirigir a login si quieres
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Error en el registro';
        this.successMessage = '';
      }
    });
  }
}
