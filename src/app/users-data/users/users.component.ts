import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {


  constructor(private router:Router){

  }
  OnHomeClick(){
    // perfom some logic 
    // there are two ways 
      //  one 
    // this.router.navigateByUrl('/')
      // two
      this.router.navigate(['/'])
  }
}
