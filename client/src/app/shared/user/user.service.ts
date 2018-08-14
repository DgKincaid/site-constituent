import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public taskChange: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) {}

  public getUser(userId): void {
    this.http.get('http://localhost:3000/api/user?id=' + userId).subscribe((data) => {
      console.log(data);
    });
  }
}
