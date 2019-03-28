import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../api.service";
import {CookieService} from "angular2-cookie/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  RegForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    surname: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('' ),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    phone: new FormControl(''),
  });

  formMessage = '';


  constructor(public api: ApiService,private router: Router,private _cookieService: CookieService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.RegForm.value);

    this.api.registration(this.RegForm.value).subscribe((data: {}) => {
      console.log(data);
      this._cookieService.put("token", data["token"]);
      this.formMessage = 'Registration successfull!';
      setTimeout(() => {
        this.router.navigate(['todos']);
      }, 5000);
    });

  }

}
