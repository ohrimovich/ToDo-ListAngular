import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Task } from '../to-do-list/to-do-list.component';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  @Input() task: Task; 
  @Input() isRenderLine: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  public showOptions(e: Event) {
    e.stopPropagation();
    this.task.showOptions = !this.task.showOptions
  }

  

}
