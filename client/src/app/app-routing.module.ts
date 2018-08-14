import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { LoginComponent } from './containers';
import { TaskComponent } from './containers/task/task.component';
import { RegisterComponent } from './containers/register/register.component';
import { AccountComponent } from './containers/account/account.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'tasks', component: TaskComponent, canActivate: [ AuthGuard ] },
  { path: 'account', component: AccountComponent, canActivate: [ AuthGuard ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ AuthGuard ]
})
export class AppRoutingModule { }
