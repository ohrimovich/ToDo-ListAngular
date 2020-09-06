import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { DateComponent } from './components/date/date.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TaskOptionsComponent } from './components/task-options/task-options.component';
import { AppPinComponent } from './components/app-pin/app-pin.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    DateComponent,
    AddTaskComponent,
    TasksListComponent,
    TaskOptionsComponent,
    AppPinComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
