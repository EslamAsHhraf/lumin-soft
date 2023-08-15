import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-editTask',
  templateUrl: './editTask.component.html',
  styleUrls: ['./editTask.component.css'],
})
export class EditTaskComponent implements OnInit {
  @Input() editTaskValue!: any;
  @Output() editTask: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() { }
  edit() {
    new this.editTask().emit();
  }
}
