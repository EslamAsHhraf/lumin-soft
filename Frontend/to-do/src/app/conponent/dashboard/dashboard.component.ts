import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  taskObj: Task = new Task();
  taskArr: Task[] = [];

  addTaskValue: string = '';
  editTaskValue: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.editTaskValue = '';
    this.addTaskValue = '';
    this.taskObj = new Task();
    this.taskArr = [];
    this.getAllTask();
  }
  getAllTask() {
    this.taskService.getAllTask().subscribe({
      next: (res) => {
        this.taskArr = res;
      },
      error: (err) => {
        alert('Unable to get list of tasks');
      },
    });
  }

  addTask() {
    this.taskObj.description = this.addTaskValue;
    this.taskService.addTask(this.taskObj).subscribe({
      next: (res) => {
        this.ngOnInit();
        this.addTaskValue = '';
      },
      error: (err) => {
        alert(err);
      },
    });
  }

  editTask() {
    this.taskObj.description = this.editTaskValue;
    this.taskService.editTask(this.taskObj).subscribe({
      next: (res) => {
        this.ngOnInit();
      },
      error: (err) => {
        alert('Failed to update task');
      },
    });
  }

  deleteTask(etask: Task) {
    this.taskService.deleteTask(etask).subscribe({
      next: (res) => {
        this.ngOnInit();
      },
      error: (err) => {
        alert('Failed to delete task');
      },
    });
  }
  completeTask(etask: Task) {
    etask.isCompleted = !etask.isCompleted;
    console.log(etask);
    this.taskService.completeTask(etask).subscribe({
      next: (res) => {
        this.ngOnInit();
      },
      error: (err) => {
        alert('Failed to update task');
      },
    });
  }
  call(etask: Task) {
    console.log(etask);
    this.taskObj = etask;
    this.editTaskValue = etask.description;
  }
}
