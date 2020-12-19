import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = []; // define items property to store products in the cart

  constructor(
    private http: HttpClient
  ) {}

  addToCart(product) { // define methods to add items to the cart
    this.items.push(product); 
  }

  getItems() { // define methods to return cart items from the cart
    return this.items; // returns each item with its associated quantity
  }

  clearCart() { // define methods to clear all items in the cart
    this.items = [];
    return this.items;
  }

  getShippingPrices() { // define method that uses the HttpClient get-method
    return this.http.get('/assets/shipping.json');
  }
}
