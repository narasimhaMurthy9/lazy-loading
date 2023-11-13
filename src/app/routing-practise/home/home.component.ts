import { Component,OnInit,OnDestroy } from '@angular/core';
import {interval,Observable,Observer} from 'rxjs'
import {filter, map}from 'rxjs/operators'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy{
  intervalSubscription:any;
constructor(){
  
}


ngOnInit(): void {
  // interval is a in built obsever in rxjs , observable example 
  // this.intervalSubscription=interval(1000).subscribe(count=>{console.log(count);
  // })

  // lets create a custom observable
let customObservable=Observable.create((Observer:any)=>{
  let count=0
  setInterval(()=>{
    Observer.next(count)
    if(count>3){
      Observer.error('count exceeded');
      
    }
    if(count>2){
      Observer.complete();
      
    }
    

    count++
  },1000)
})
// rxjs has operators to manipulate the data before subscribe,we can apply multiple operators to the observables
this.intervalSubscription=customObservable.pipe(map((data:any)=>{
  return 'count is ' + (data+1)
})).subscribe((data:any)=>{
  console.log(data)
},(error:any)=>{
  console.log(error); 
},()=>{
  console.log('completed');
  
}
)
}

ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe()
}


}
