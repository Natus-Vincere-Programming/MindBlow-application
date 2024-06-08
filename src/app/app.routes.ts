import {Routes} from '@angular/router';
import {DashboardComponent} from "./page/dashboard/dashboard.component";
import {RecoveryComponent} from "./page/recovery/recovery.component";
import {LandingComponent} from "./page/landing/landing.component";
import {LoginComponent} from "./page/login/login.component";
import {RegisterComponent} from "./page/register/register.component";
import {RegisterPendingComponent} from "./page/register/register-pending/register-pending.component";
import {authGuard} from "./guard/auth.guard";

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent, canActivate: [authGuard]},
    {path: 'register', component: RegisterComponent},
    {path: 'recovery', component: RecoveryComponent},
    {path: '', component: LandingComponent},
    {path: 'pending', component: RegisterPendingComponent}
];
