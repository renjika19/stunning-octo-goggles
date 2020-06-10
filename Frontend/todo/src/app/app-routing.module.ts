import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGaurdService } from './service/route-gaurd.service';

// welcome
const routes: Routes = [
  { path:'', component: LoginComponent}, //canActivate, RouteGuardService
  { path:'login', component: LoginComponent},
  { path:'welcome/:name', component: WelcomeComponent, canActivate: [RouteGaurdService]},
  { path:'todos', component:ListTodosComponent,canActivate: [RouteGaurdService] },
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGaurdService]},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
