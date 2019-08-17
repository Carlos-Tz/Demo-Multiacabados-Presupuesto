import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewFormComponent } from './components/view-form/view-form.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { SecureInnerPagesGuard } from './services/secure-inner-pages.guard';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: FormComponent},
  {path: 'panel', component: DashboardComponent, canActivate: [AuthGuard]},
 /*  {path: 'view/:key', component: ViewFormComponent, canActivate: [AuthGuard]}, */
  {path: 'edit/:key', component: EditComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent, canActivate: [SecureInnerPagesGuard]}
 /*  {path: 'login', component: LoginComponent, canActivate: [SecureInnerPagesGuard]},
  {path: 'stats/:key', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'view/:key/:key2', component: ViewSurveyComponent, canActivate: [AuthGuard]},
  {path: 'panel', component: SurveyFormComponent, canActivate: [AuthGuard]} */
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
