import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {map}from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class PostfirebaseService {

  constructor(private http:HttpClient) {}

  fetchPosts(){
    // let sendParams=new HttpParams
    // sendParams=sendParams.append('page_no','1')
    // sendParams=sendParams.append('size','5')
   return(
    this.http.get('https://angular-practise-37bf1-default-rtdb.firebaseio.com/posts.json',
    // {
    //   headers: new HttpHeaders({
    //     'Authorised_by':'bobby'
    //   }),
    // u can pass param to url like this
      // params:sendParams
    // }
    )
    .pipe(map((response:any)=>{
      let posts:any=[]
      for(let key in response){
       posts.push({...response[key],key})
      }
      return posts
     }))
   ) 
  }

  createPosts(postData:any){
    this.http.post('https://angular-practise-37bf1-default-rtdb.firebaseio.com/posts.json',postData,{
      headers:new HttpHeaders({
        'authorised_by':'post_bobby'
      })
    }).subscribe((response)=>{
     this.fetchPosts() 
    })
  }

}
