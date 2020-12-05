import { Component } from '@angular/core';
import { NewServiceService } from './new-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
  // template: `<h1>Hello Angular</h1>
  //           <h2>Creation the API</h2>
  //           <p>My first component- very first approach</p>`,
  // styles: [`h1, h2, p {color:brown;}
  //           h3 {font-size: 1.5rem;}`]
  template: `<div>
    <h1>Angular Routes</h1>
    <nav>
      <a routerLink="">Home</a>
      <a routerLink="/about">About</a>
      <a routerLink="/news">News</a>
      <a routerLink="/price">Price</a>
    </nav>
    <router-outlet></router-outlet>
  </div>`
})
export class AppComponent {
  title = 'app-steps  - Angular step by step application';
  constructor(svc: NewServiceService) {
    svc.consoleText("Hello Angular");
  }
}
