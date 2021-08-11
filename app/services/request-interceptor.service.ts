import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let userToken=localStorage.getItem("token");
    if(userToken){
      return next.handle(req.clone({headers:req.headers.set('Authorization',userToken)}));
    }
    return next.handle(req);
  }
}
