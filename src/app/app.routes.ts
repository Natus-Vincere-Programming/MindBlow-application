import {Routes} from '@angular/router';
import {DashboardComponent} from "./page/dashboard/dashboard.component";
import {RecoveryComponent} from "./page/recovery/recovery.component";
import {LandingComponent} from "./page/landing/landing.component";
import {RegisterComponent} from "./page/register/register.component";

export const routes: Routes = [
    {path: 'login', loadComponent: () => import('./page/login/login.component').then(m => m.LoginComponent)},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'recovery', component: RecoveryComponent},
    {path: '', component: LandingComponent}
];
