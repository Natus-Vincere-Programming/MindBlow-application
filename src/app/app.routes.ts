import {Routes} from '@angular/router';
import {DashboardComponent} from "./page/dashboard/dashboard.component";
import {RecoveryComponent} from "./page/recovery/recovery.component";
import {LandingComponent} from "./page/landing/landing.component";
import {LoginComponent} from "./page/login/login.component";
import {RegisterComponent} from "./page/register/register.component";

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'recovery', component: RecoveryComponent},
    {path: '', component: LandingComponent}
];
