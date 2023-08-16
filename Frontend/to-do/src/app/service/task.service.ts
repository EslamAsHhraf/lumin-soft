import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../model/task';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  serviceURL: string;
  constructor(private http: HttpClient) {
    this.serviceURL = 'http://localhost:5001/api';
  }

  getAllTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.serviceURL + '/tasks');
  }

  completeTask(task: Task): Observable<Task> {
    return this.http.put<Task>(
      this.serviceURL + '/completeTask/' + task.id,
      task
    );
  }
}
