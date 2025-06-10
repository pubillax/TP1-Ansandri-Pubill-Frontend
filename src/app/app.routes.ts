import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { VerificacionMailComponent } from './components/verificacion-mail/verificacion-mail.component';
import { EquipoComponent } from './components/equipo/equipo.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'verify-email', component: VerificacionMailComponent },
  { path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'equipos', component: EquipoComponent}
];
export class AppRoutingModule {}
