import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-pin',
  templateUrl: './app-pin.component.html',
  styleUrls: ['./app-pin.component.scss']
})
export class AppPinComponent implements OnInit {
  @Input() isPink: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
