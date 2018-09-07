import { Component, EventEmitter } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  products: Product[];

  constructor () {
    this.products = [
      new Product (
      'NICEHAT',
      'Black hat',
      '/assets/images/products/black-hat.jpg',
      ['Men', 'Accessories', 'Hats'],
      2900
    ),

    new Product (
      'NEATOJACKET',
      'Blue jacket',
      '/assets/images/products/blue-jacket.jpg',
      ['Women', 'Apparel', 'Jackets & Vests'],
      7500
    ),

    new Product (
      'ADIDASSHOES',
      'Black running shoes',
      '/assets/images/products/black-shoes.jpg',
      ['Men', 'Shoes', 'Running Shoes'],
      5600
    ),
  ]
  }

productWasSelected(product: Product): void {
  console.log('Product clicked: ', product);
}
}
