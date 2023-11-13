import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms'
import {map} from 'rxjs'
import { PostfirebaseService } from 'src/app/services/postfirebase.service';
@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss']
})
export class PostDataComponent implements OnInit {
  postForm:any
  posts:any
constructor(private fb:FormBuilder,private http:HttpClient,private postService:PostfirebaseService){
this.postForm=this.fb.group({
  title:['',Validators.required],
  content:['',Validators.required]
})
}

ngOnInit(): void {
    this.getPosts()
}
getPosts(){
  this.postService.fetchPosts().subscribe((response)=>{
    this.posts=response
  })
}
onCreatePost(){
 
  const postData=this.postForm.value
  this.postService.createPosts(postData)

}
}
