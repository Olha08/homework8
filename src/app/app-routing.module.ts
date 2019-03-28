import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component";
import {TodosComponent} from "./todos/todos.component";
import {CreateToDoComponent} from "./create-to-do/create-to-do.component";
import {UpdateUserComponent} from "./update-user/update-user.component";
import {UpdateTodoComponent} from "./update-todo/update-todo.component";
import {LoginGuard} from "./login.guard";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'todos', component: TodosComponent, canActivate: [LoginGuard] },
  { path: 'create-to-do', component: CreateToDoComponent, canActivate: [LoginGuard] },
  { path: 'update-user', component: UpdateUserComponent, canActivate: [LoginGuard] },
  { path: 'update-to-do/:todo', component: UpdateTodoComponent, canActivate: [LoginGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
