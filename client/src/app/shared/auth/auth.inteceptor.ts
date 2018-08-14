import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInteceptor implements HttpInterceptor {

  constructor (private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem(this.authService.STORAGE_KEY.TOKEN_KEY);

    console.log(token);
    if (token) {
      const clone = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + localStorage.getItem(this.authService.STORAGE_KEY.TOKEN_KEY)
        }
      });
      return next.handle(clone);
    }
    else {
      return next.handle(request);
    }
  }
}
