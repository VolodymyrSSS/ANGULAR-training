import { Component, OnInit } from '@angular/core'; // handles the display of each product
import { ActivatedRoute } from '@angular/router'; // to display the specific details for each product

import { products } from '../products';
import { CartService } from '../cart.service'; // to add a product to the cart

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product; // define the product property

  constructor(
    // contains information about the route and the route's parameters. This is configuring the component to use a service.
    private route: ActivatedRoute,  
    private cartService: CartService
  ) { }

  ngOnInit() {
    // subscribe to route parameters and fetch the product based on the productId.
    this.route.paramMap.subscribe(params => {
      console.log(params);
      
      this.product = products[+params.get('productId')];
    }); // The route parameters correspond to the path variables defined in the route. The URL that matches the route provides the productId.
  }

  addToCart(product) { // define the method, which adds the current product to the cart
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
