import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- IMPORTANTE
import { AppRoutingModule } from '../../app.routes';
import { Router } from '@angular/router'; // IMPORTANTE: Router

@Component({
  selector: 'app-login',
  standalone: true, // <-- también necesario
  imports: [FormsModule], // <-- para usar ngForm y ngSubmit
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  constructor(private router: Router) {} // <-- Declaración correcta
  login() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    // Guardar en localStorage
    localStorage.setItem('userEmail', this.email);
    localStorage.setItem('userPassword', this.password);
  }
  irRegister() {
    this.router.navigate(['/register']);
  }
}
