import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: FormComponent},
  {path: 'panel', component: DashboardComponent},
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
