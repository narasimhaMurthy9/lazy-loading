import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree,CanActivateChild, CanActivateChildFn} from '@angular/router'
import { AuthSerivceService } from '../auth-serivce.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService implements CanActivate ,CanActivateChild {

  constructor(private authService:AuthSerivceService,private router:Router) { }
  // canActivate used for validate both parent and child
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):any {
     let userLoggedIn= this.authService.isUserLoggedIn()
     if(userLoggedIn){
      return true
     }else{
     this.router.navigate(['/'])
     }
  }
  // if parent needs to be show but child components need to validate then use canActivateChild
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):any {
    let userLoggedIn= this.authService.isUserLoggedIn()
    if(userLoggedIn){
     return true
    }else{
    this.router.navigate(['/'])
    }
  }
}


