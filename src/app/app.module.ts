import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routing-practise/home/home.component';
import { AuthGuardServiceService } from './services/gaurds/auth-guard-service.service';
import { DeactiveGaurdService } from './services/gaurds/deactive-gaurd.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule}from '@angular/common/http'
import { UsersDataModule } from './users-data/users-data.module';
import { PostsModule } from './posts/posts.module';
import { CategoriesModule } from './categories/categories.module';
import { InterceptorfileInterceptor } from './services/interceptorfile.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    // child modules need to first then app routning (parent)module
    // UsersDataModule,
    // PostsModule,
    CategoriesModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [
 
      {
       provide: HTTP_INTERCEPTORS,
       useClass: InterceptorfileInterceptor,
       multi: true
      }, 
    AuthGuardServiceService,
    AuthGuardServiceService,
    DeactiveGaurdService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
