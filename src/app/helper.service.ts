import {Injectable} from "@angular/core";
import {CookieService} from "angular2-cookie/core";

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  constructor(private cookieservice:CookieService) {
  }

  isLogged(){
    if (this.cookieservice.get('token')){
      return true;
    } else return false;
  }
}
