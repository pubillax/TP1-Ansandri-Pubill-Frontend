import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { VerificacionMailComponent } from './components/verificacion-mail/verificacion-mail.component';

export const routes: Routes = [
    {path:"login", component: LoginComponent},
    {path:"registrar", component: RegisterComponent},
    {path:"verificacion-mail", component: VerificacionMailComponent}
];

