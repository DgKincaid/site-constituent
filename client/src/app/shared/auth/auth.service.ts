import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

interface User {
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(user: User): Observable<any> {
    return this.http.post<User>('http://localhost:3000/api/auth/login', user).pipe(shareReplay());
  }
}
