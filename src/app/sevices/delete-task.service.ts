import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteTaskService {
  private subjekt = new Subject<any>();

  constructor() { }

  public sendData(data: {taskId: number, eventName: string}) {
    this.subjekt.next(data)
  }

  getTaskId() {
    return this.subjekt.asObservable();
  }
}

