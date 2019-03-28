import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-to-do',
  templateUrl: './create-to-do.component.html',
  styleUrls: ['./create-to-do.component.scss']
})
export class CreateToDoComponent implements OnInit {

  createToDoForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(4)]),
    description: new FormControl('', [Validators.required, Validators.minLength(4)]),
    image: new FormControl(''),
  });

  constructor(private api:ApiService,private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.api.createToDo(this.createToDoForm.value).subscribe((data: {}) => {
      console.log(data);
      this.router.navigate(['todos']);
    });
  }

  changeListener($event) : void {
    this.readImage($event.target);
  }

  readImage(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();

    myReader.onloadend = (e) => {
      // this.image = myReader.result;
      this.createToDoForm.controls['image'].setValue(myReader.result);
    }
    myReader.readAsDataURL(file);
  }

}
