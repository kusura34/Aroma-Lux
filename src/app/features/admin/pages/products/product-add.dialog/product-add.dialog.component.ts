import { Component, inject } from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Observable, Subscribable } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-add.dialog',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './product-add.dialog.component.html',
  styleUrl: './product-add.dialog.component.scss',
})
export class ProductAddDialogComponent {
  private dialogRef = inject(MatDialogRef<ProductAddDialogComponent>);
  private fb = inject(NonNullableFormBuilder);
  private snackBar = inject(MatSnackBar);
  public data = inject(MAT_DIALOG_DATA, { optional: true });

  public form = this.fb.group({
    name: [this.data?.name || '', [Validators.required]],
    description: [this.data?.description || '', [Validators.required]],
    price: [this.data?.price || 0, [Validators.required, Validators.min(0)]],
    weight: [this.data?.weight || 0, [Validators.required, Validators.min(0)]],
    category: [this.data?.category || '', [Validators.required]],
    imageUrl: [this.data?.imageUrl || '', [Validators.required]],
    isAvailable: [this.data?.isAvailable || false],
  })

  categories$ = new Observable<any[]>((observer) => {
    observer.next(['Категория 1', 'Категория 2', 'Категория 3']);
    observer.complete();
  }); 
  onFileSelected($event: Event) {
    throw new Error('Method not implemented.');
  }
  onClose() {
    this.dialogRef.close();
  }
  formSubmit() {
    this.dialogRef.close(this.form.value)
  }
  isEditMode: boolean = false;
  isUploading = (): void => {};
}
