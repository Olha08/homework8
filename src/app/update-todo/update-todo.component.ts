import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {forEach} from "@angular/router/src/utils/collection";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.scss']
})
export class UpdateTodoComponent implements OnInit {

  dataLoaded = false;

  updateToDoForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(4)]),
    description: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  formMessage = '';

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.initToDo();
  }

  private initToDo(){
    this.api.todolist().subscribe((data: []) => {
      console.log(data);

      for (let todo of data) {
        if (todo['_id'] === this.route.snapshot.paramMap.get("todo") ) {
          this.dataLoaded = true;

          this.updateToDoForm.controls['title'].setValue(todo['title']);
          this.updateToDoForm.controls['description'].setValue(todo['description']);
        }
      }
    });
  }

  onSubmit(){
    this.api.updateToDo(this.updateToDoForm.value, this.route.snapshot.paramMap.get("todo")).subscribe((data: {}) => {
      console.log(data);
      this.formMessage = 'Update successfull!';
      this.router.navigate(['todos']);
    });
  }

}
