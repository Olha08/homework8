import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos:any = [];
  p: number = 1;
  filterByTitle = '';

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.loadToDos();
  }

  private loadToDos(){
    this.api.todolist().subscribe((data: {}) => {
      console.log(data);
      this.todos = data;

      this.sortBy('title', false);
    });
  }

  sortBy(field: string, revers: boolean) {

    this.todos.sort((a: any, b: any) => {
      if (revers) {
        if (a[field] > b[field]) {
          return -1;
        } else if (a[field] < b[field]) {
          return 1;
        } else {
          return 0;
        }
      } else {
        if (a[field] < b[field]) {
          return -1;
        } else if (a[field] > b[field]) {
          return 1;
        } else {
          return 0;
        }
      }

    });
    // this.orderedProducts = this.originalProducts;
  }

  deleteToDo(id){
    this.api.deleteToDo(id).subscribe((data: {}) => {
      this.loadToDos();
    });
  }

}
