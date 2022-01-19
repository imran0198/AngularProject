import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from '../Services/service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authguard:ServiceService){}
  canActivate(){
    if(this.authguard.dashboard()){
      window.alert("now you can navigate to UserDashboard")

      return true

    }else {
      window.alert("first complete registration and login")
      return false
      
    }
  }
  
}
