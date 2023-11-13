import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  user:any
constructor(private route:ActivatedRoute){

}
ngOnInit(): void {
  // this.user={
  //   id:this.route.snapshot.params['id'],
  //   name:this.route.snapshot.params['name']
  // }
    
  // every time listen when dynamically data of id and name updated

  this.route.params.subscribe((data:Params)=>{
    console.log(data,'params');
    
    this.user={
      id:data['id'],
      name:data['name']
    }
  })
}

}
