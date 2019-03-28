import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CookieService} from "angular2-cookie/core";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  updateForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  formMessage = '';

  constructor(private api:ApiService,private _cookieService: CookieService) { }

  ngOnInit() {
  }

  onSubmit(){

    this.api.updateUser(this.updateForm.value).subscribe((data: {}) => {
      console.log(data);
      this.formMessage = 'Update completed!';
    });
  }
}
