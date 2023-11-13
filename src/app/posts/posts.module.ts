import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDataComponent } from './post-data/post-data.component';
import { PostsRoutingModule } from './posts-routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    PostDataComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PostsModule { }
