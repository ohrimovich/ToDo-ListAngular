import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output('addTask') addTask: EventEmitter<string> = new EventEmitter<string>()
  @ViewChild('input') input: ElementRef
  constructor() { }

  ngOnInit(): void {
  }

  public onEnterKey(value: string): void {
    if(value.trim()){
      this.addTask.emit(value);
      this.input.nativeElement.value = ''
    }
  }

}
