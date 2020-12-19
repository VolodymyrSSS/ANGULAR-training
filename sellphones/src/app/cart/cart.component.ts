import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'; // provides convenient methods for generating controls

import { CartService } from '../cart.service'; // import the CartService 


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items; // define the items property to store the products in the cart
  checkoutForm; // define the checkoutForm property to store the form model

  constructor(
    private cartService: CartService, // inject the CartService service
    private formBuilder: FormBuilder, // inject the FormBuilder service
  ) {
    //  set the checkoutForm property with a form model containing name and address fields
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  } 

  // Set the items using the CartService getItems method (which is defined when you created cart.service)
  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  // define an onSubmit() method to process the form
  onSubmit(customerData) {
    this.items = this.cartService.clearCart(); // method to empty the cart items 
    this.checkoutForm.reset(); // method to reset the form after its submission

    console.warn('Your order has been submitted', customerData);
  }

}
