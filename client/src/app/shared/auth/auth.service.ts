import * as moment from 'moment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, pipe } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public STORAGE_KEY = {
    TOKEN_KEY: 'id_token',
    EXPIRATION_KEY: 'expires_at'
  };

  constructor(private http: HttpClient) { }

  public register(newUser): Observable<any> {
    return this.http.post('http://localhost:3000/api/auth/register', newUser)
      .pipe(tap((res) => {
        console.log(res);
        this.setSession(res);
      }))
      .pipe(shareReplay());
  }

  public login(user: User): Observable<any> {
    return this.http.post<User>('http://localhost:3000/api/auth/login', user)
      .pipe(tap(res => this.setSession(res) ))
      .pipe(shareReplay());
  }

  public logout(): void {
    localStorage.removeItem(this.STORAGE_KEY.TOKEN_KEY);
    localStorage.removeItem(this.STORAGE_KEY.EXPIRATION_KEY);
  }

  public isLoggedIn(): boolean {
    const expiration = moment(JSON.parse(localStorage.getItem(this.STORAGE_KEY.EXPIRATION_KEY)));

    return moment().isBefore(expiration);
  }

  private setSession(token): void {
    const expiresAt = moment().add(token.expiresIn, 'second');

    console.log(token);
    localStorage.setItem(this.STORAGE_KEY.TOKEN_KEY, token.token);
    localStorage.setItem(this.STORAGE_KEY.EXPIRATION_KEY, JSON.stringify(expiresAt.valueOf()));
  }
}
