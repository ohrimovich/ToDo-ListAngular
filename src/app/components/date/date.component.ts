import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  public day: string | number;
  public date: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
