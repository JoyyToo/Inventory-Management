import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product.model';
// @ProductsListComponent used to render all productrows and storing currently selected products

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent implements OnInit {
  @Input() productList: Product[]; // the product[] passed to us
  @Output() onProductSelected: EventEmitter<Product>; // outputs the current product whenever a new product is selected
  private currentProduct: Product; // local state containing currently selected Product

  constructor() {
    this.onProductSelected = new EventEmitter();
   }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct){
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

  ngOnInit() {
  }

}
