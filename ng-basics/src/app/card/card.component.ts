import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../app.component'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
//  interpolation: ['{{', '}}']
//   template: `
//   <div class="card">
//     <h2>Card Component</h2>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, sed.</p>
//   </div>
//   `,
//   styles: [`
//   .card {
//     padding: .5rem 1rem;
//     border: 2px dashed #a52a2a;
//     margin-bottom: 1rem;
//   }

//   h2 {
//     margin-bottom: .5rem;
//   }
// `]
})

export class CardComponent implements OnInit {

  @Input() card: Card
  @Input() index: number

  title: string = 'My card title'
  text: string = 'Tis is another sample of text'

  // number = 42
  // array = [1, 1, 2, 3, 5, 8, 13]
  // obj = {name: 'Walter', info: {age: 40, job: 'Frontend'}}
  
  // getInfo(): string {
  //   return 'This is my info'
  // }

  // disabled = false

  // imgUrl = 'https://pngimage.net/wp-content/uploads/2019/05/logo-owl-vector-png-.png'
  
  // ngOnInit() {
    // setTimeout(() => {
    //   // this.imgUrl = 'https://img2.pngio.com/owl-logo-vector-illustration-emblem-design-on-white-wing-eagle-owl-logo-png-640_640.png'
    //   this.imgUrl = 'https://www.mixd.co.uk/content/uploads/2020/04/uncannyowl-logo.png'
    //   this.disabled = true
    // }, 3000)
  // }

  cardDate: Date = new Date()

  textColor: string

  ngOnInit() {}

  changeTitle() {
    this.card.title = 'The title has been change'
  }

  // inputHandler(event: any) {
  //   const value = event.target.value
  //   this.title = value
  // }
  inputHandler(value) {
    this.title = value
  }

  changeHandler() {
    console.log(this.title)
  }

}