import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import {CookieService} from "angular2-cookie/core";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  endpoint = 'https://lectorium.herokuapp.com/api/';

  constructor(private http: HttpClient, private _cookieService:CookieService ) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  login(formData): Observable<any> {
    return this.http.post(this.endpoint + 'login', JSON.stringify(formData)).pipe(
      map(this.extractData));
  }

  todolist(): Observable<any> {
    let token = this._cookieService.get("token");
    let httpOptions = {
      headers: new HttpHeaders({
        'x-apikey':  token
      })
    };
    return this.http.get(this.endpoint + 'todolist', httpOptions).pipe(
      map(this.extractData));
  }

  registration(formData): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(this.endpoint + 'registration', JSON.stringify(formData),httpOptions).pipe(
      map(this.extractData));
  }

  createToDo(formData): Observable<any> {
    let token = this._cookieService.get("token");
    let httpOptions = {
      headers: new HttpHeaders({
        'x-apikey':  token,
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(this.endpoint + 'todolist',JSON.stringify(formData),httpOptions).pipe(
      map(this.extractData));
  }

  deleteToDo(id): Observable<any> {
    let token = this._cookieService.get("token");
    let httpOptions = {
      headers: new HttpHeaders({
        'x-apikey':  token
      })
    };
    return this.http.delete(this.endpoint + 'todolist/' + id,httpOptions).pipe(
      map(this.extractData));
  }

  updateUser(formData): Observable<any> {
    let token = this._cookieService.get("token");
    let httpOptions = {
      headers: new HttpHeaders({
        'x-apikey':  token,
        'Content-Type':  'application/json'
      })
    };
    return this.http.put(this.endpoint + 'user',JSON.stringify(formData),httpOptions).pipe(
      map(this.extractData));
  }

  updateToDo(formData,id): Observable<any> {
    let token = this._cookieService.get("token");
    let httpOptions = {
      headers: new HttpHeaders({
        'x-apikey':  token,
        'Content-Type':  'application/json'
      })
    };
    return this.http.put(this.endpoint + 'todolist/' + id,JSON.stringify(formData),httpOptions).pipe(
      map(this.extractData));
  }

}
