import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  message1: string = new Date().toDateString();
  message2: string;
  message3: string = new Date().toTimeString();
  message4: string;

  constructor() { 
    this.message2 = 'Greetings from the date-component';
    setInterval (() => {
      this.message4 = new Date().toTimeString();
    }, 1000)
  }

  ngOnInit(): void {
  }

}
