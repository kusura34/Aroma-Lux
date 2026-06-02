import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MOCK_PRODUCTS } from '../../../../../../core/data/mock-products';
import { Product } from '../../../../../../shared/models/product/product.interface';
import { MatDialog } from '@angular/material/dialog';
import { ProductAddDialogComponent } from '../product-add.dialog/product-add.dialog.component';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products: Product[] = MOCK_PRODUCTS;
@Input() product!: Product;
dialog = inject(MatDialog);

openDialog() {
  const dialogRef = this.dialog.open(ProductAddDialogComponent, {
  panelClass: 'custom-dialog-container',
});
dialogRef.afterClosed().subscribe(result => {
  console.log('Диалог закрыт с результатом:', result);
})
}
}
