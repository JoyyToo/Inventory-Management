import { Component, Input, HostBinding } from '@angular/core';
import { Product } from '../product.model';
// a component for the view of a single component

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html'
})
export class ProductRowComponent{
  @Input() product: Product // this row takes an @Input of product
  @HostBinding('attr.class') cssClass = 'item'; // lets us attach CSS class item on the element this component is attached to
}
