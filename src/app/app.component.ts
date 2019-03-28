import { Component } from '@angular/core';
import {HelperService} from "./helper.service";
import {NavigationEnd, Router} from "@angular/router";
import {ApiService} from "./api.service";
import {CookieService} from "angular2-cookie/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hw8';
  isLogged;
  constructor(private helperService:HelperService, private router: Router, private cookie:CookieService){
    this.isLogged = helperService.isLogged();

    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.isLogged = helperService.isLogged();
      }
    });
  }

  logOut(){
    this.cookie.remove('token');
    this.router.navigate(['']);
  }
}
