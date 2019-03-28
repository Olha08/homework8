import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ApiService} from "../api.service";
import { CookieService } from "angular2-cookie/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  formMessage = '';


  constructor(public api: ApiService,private router: Router,private _cookieService: CookieService) { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);

    this.api.login(this.loginForm.value).subscribe((data: {}) => {
      console.log(data);
      this._cookieService.put("token", data["token"]);
      this.formMessage = 'Registration successfull!';
      setTimeout(() => {
        this.router.navigate(['todos']);
      }, 3000);
    });

  }

  goToRegistration(){
    this.router.navigate(['registration']);
  }

}
