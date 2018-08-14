import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public taskChange: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) {}

  public getTasks(): void {
    this.http.get('http://localhost:3000/api/tasks/all').subscribe((data) => {
      console.log(data);
    });
  }
}
