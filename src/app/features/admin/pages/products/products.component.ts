import { Component, Input } from '@angular/core';
import { Product } from '../../../../../shared/models/product/product.interface';
import { MOCK_PRODUCTS } from '../../../../../core/data/mock-products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products: Product[] = MOCK_PRODUCTS;
@Input() product!: Product;

openDialog() {
  
}
}
