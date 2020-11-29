import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {

  text: string = "Hello Angulaaaaar - two way binding!";

  visibility: boolean = true;
  toggle() {
    this.visibility = !this.visibility;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
