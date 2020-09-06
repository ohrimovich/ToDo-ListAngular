import { Component, OnInit, OnDestroy } from '@angular/core';
import{ Subscription } from 'rxjs'
import { DeleteTaskService } from 'src/app/sevices/delete-task.service';

export interface Task {
  value: string
  id?: number
  showOptions: boolean
  done?: boolean
  pin?: boolean
}

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit, OnDestroy {
  public tasks: Task[] = [];
  private body: HTMLElement = document.body;
  subscibtion: Subscription;
  public line: boolean = false;

  constructor(private deleteTask: DeleteTaskService) { 
    this.addClickEvent();
    this.subscibtion = this.deleteTask.getTaskId().subscribe(data => {
      if(data.eventName == 'delete') {
        this.deleteItem(data.taskId)
      } else if(data.eventName == 'done') {
        this.doneTask(data.taskId)
      } else if(data.eventName == 'pin') {
        this.pinTask(data.taskId)
      }
      this.setTaskToStorage();
    })
  }

  ngOnInit(): void {
    this.checkLocalStorage(); 
    
  }

  ngOnDestroy() {
    this.body.removeEventListener('click', this.handlerClickBody)
  }

  deleteItem(id: number) {
    this.tasks = this.tasks.filter(task => task.id != id)
  }

  doneTask(id: number) {
    const task = this.tasks.find(task => task.id == id)
    task.done = !task.done
  }

  pinTask(id: number) {
    const task = this.tasks.find(task => task.id == id)
    task.pin = !task.pin;
    this.tasks.sort( (a,b) => (a.pin == true) ? -1 : (b.pin == false) ? 1 : 0 )
    
  }

  public addTask(value: string): void {
    const task: Task = {
      id: this.tasks.length == 0 ? 1 : this.tasks.length + 1, 
      value: value,
      showOptions: true,
      done: false,
      pin: false
    }
    this.tasks.push(task);
    this.setTaskToStorage();
    
  }

  private addClickEvent() {
    this.body.addEventListener('click', this.handlerClickBody.bind(this))
  }

  private handlerClickBody(e: Event) {

    this.tasks.forEach(task => task.showOptions = true)
  }

  public isRenderLine(i: number): boolean {
    const slice: Task[] = this.tasks.slice(i + 1)
    const pinTask: Task = slice.find(task => task.pin)
    console.log(this.tasks[i].pin && !pinTask)
    return this.tasks[i].pin && !pinTask

  }
  
  public checkLocalStorage() {
    return this.tasks = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
  }
  public setTaskToStorage() {
    localStorage.setItem('items', JSON.stringify(this.tasks))
  }

}

