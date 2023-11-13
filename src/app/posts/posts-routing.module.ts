import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDataComponent } from './post-data/post-data.component';
const routes: Routes = [
  {path:'',component:PostDataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }