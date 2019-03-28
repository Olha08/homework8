import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import {Router} from '@angular/router';
import {HelperService} from "./helper.service";

@Injectable()

export class LoginGuard implements CanActivate {
  constructor(private route: Router, private helperService: HelperService){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if(this.helperService.isLogged()){
      return true;
    }else{
      this.route.navigate(["login"]);
      return false;
    }
  }
}
