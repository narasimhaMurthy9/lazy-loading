import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorfileInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request,'sending request interceptor');
    let modifiedHeaders=request.clone({
      headers:request.headers.append('Client_id','12345')
    })
    return next.handle(modifiedHeaders);
  }
}
