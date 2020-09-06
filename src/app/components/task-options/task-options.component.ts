import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../to-do-list/to-do-list.component';
import { DeleteTaskService } from 'src/app/sevices/delete-task.service';

@Component({
  selector: 'app-task-options',
  templateUrl: './task-options.component.html',
  styleUrls: ['./task-options.component.scss']
})
export class TaskOptionsComponent implements OnInit {
  @Input() task: Task 
  constructor(private sendService: DeleteTaskService) { }

  deleteTask() {
    this.sendService.sendData({taskId: this.task.id, eventName: 'delete'})
  }

  doneTask() {
    this.sendService.sendData({taskId: this.task.id, eventName: 'done'})
  }

  pinTask() {
    this.sendService.sendData({taskId: this.task.id, eventName: 'pin'})
  }

  ngOnInit(): void {
  }
 
}
