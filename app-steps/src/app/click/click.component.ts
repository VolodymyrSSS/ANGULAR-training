import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.scss']
})
export class ClickComponent implements OnInit {

  isCollapsed: boolean = true;

  constructor() { }

  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }

  myEvent(event) {
    console.log(event);
  }

  ngOnInit(): void {
  }

}
