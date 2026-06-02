import { Component } from '@angular/core';
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { Product } from '../../../../../shared/models/product/product.interface';
import { MOCK_PRODUCTS } from '../../../../../core/data/mock-products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  products: Product[] =  MOCK_PRODUCTS;

}
