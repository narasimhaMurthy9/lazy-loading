import { Component } from '@angular/core';
import { AuthSerivceService } from './services/auth-serivce.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'versionCheck';
  constructor(private authService:AuthSerivceService){

  }
  loginUser(){
  this.authService.loggedIn()
  }
  logOutUser(){
    this.authService.loggedOut()
    }
}

