import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'; // import CartService

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts; // define a shippingCosts property

  constructor(
    private cartService: CartService // inject the cart service
  ) {
  }

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices(); // set the shippingCosts property
  }

}
