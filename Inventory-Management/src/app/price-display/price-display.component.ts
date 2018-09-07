import { Component, Input } from '@angular/core';
// a component to show price of product

@Component({
  selector: 'price-display',
  template: `
    <div class="price-display">\${{ price }}</div>
  `
})
export class PriceDisplayComponent {
  @Input() price: number;

  constructor() { }

}
