import { Component, Input } from '@angular/core';
import { Product } from '../../../../../shared/models/product/product.interface';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input()
  product!: Product;

  addToCart(product: Product) {

  }
}
