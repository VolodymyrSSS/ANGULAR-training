import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-looped',
  templateUrl: './looped.component.html',
  styleUrls: ['./looped.component.scss']
})
export class LoopedComponent implements OnInit {

  items = ['Angular', 'React', 'Vue', 'Node.JS', 'Bootstrap', 'Materialize' ];
  fruits = ['Apple', 'Pear', 'Plum', 'Grape', 'Orange', 'Charry' ];
  vegetables = ['Cabbage', 'Beetroot', 'Squash', 'Tomato', 'Cucumber', 'Radish' ];

  constructor() { }

  ngOnInit(): void {
  }

}
