import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/service/task.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  taskArr: Task[] = [];
  error: boolean = false;
  errorMessage: string = '';


  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskArr = [];
    this.getAllTask();
  }
  // fetch all tasks
  getAllTask() {
    this.taskService.getAllTask().subscribe({
      next: (res) => {
        this.error = false;
        this.taskArr = res;
      },
      error: (err) => {
        // put error message
        this.error = true;
        this.errorMessage = 'Unable to get list of tasks';
      },
    });
  }

  // make task complete or not
  completeTask(etask: Task) {
    etask.isCompleted = !etask.isCompleted;
    console.log(etask);
    this.taskService.completeTask(etask).subscribe({
      next: (res) => {
        this.error = false;
        this.ngOnInit();
      },
      error: (err) => {
        // put error message
        this.error = true;
        this.errorMessage = 'Failed to update task';
        etask.isCompleted = !etask.isCompleted;
      },
    });
  }

}
