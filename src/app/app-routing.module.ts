import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routing-practise/home/home.component';
import { UsersDataModule } from './users-data/users-data.module';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'users', loadChildren:()=>import('./users-data/users-data.module').then((m)=>m.UsersDataModule)},
  {path:'post', loadChildren:()=>import('./posts/posts.module').then((m)=>m.PostsModule)}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  // useHAsh is used rarely used , if server side routing is no accepting then we need to give this
  exports: [RouterModule],
})
export class AppRoutingModule {}
