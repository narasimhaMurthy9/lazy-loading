import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthSerivceService {
  logInUser:boolean=false
  constructor() { }
loggedIn(){

  
  this.logInUser=true
  console.log(this.logInUser,'logged in');
}
loggedOut(){
  
  
  this.logInUser=false
  console.log(this.logInUser,'logged out');
}
isUserLoggedIn(){
 return this.logInUser
}
}
