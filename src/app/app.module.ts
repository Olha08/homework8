import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CookieService} from "angular2-cookie/core";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { TodosComponent } from './todos/todos.component';
import { CreateToDoComponent } from './create-to-do/create-to-do.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import {SearchFilterPipe} from "./searchfilter.pipe";
import {LoginGuard} from "./login.guard";

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    TodosComponent,
    CreateToDoComponent,
    UpdateUserComponent,
    UpdateTodoComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [CookieService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
