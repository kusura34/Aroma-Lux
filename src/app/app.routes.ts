import { Routes } from '@angular/router';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { AdminLayoutComponent } from '../layout/admin-layout/admin-layout.component';
import { HomeComponent } from '../pages/home/home.component';
import { ProductsListComponent } from '../pages/products-list/products-list.component';
import { CartComponent } from '../pages/cart/cart.component';

export const routes: Routes = [
  { path: '', component: MainLayoutComponent,
    children: [
        {path: '', component: HomeComponent},
        {path: 'products', component: ProductsListComponent},
        {path: 'cart', component: CartComponent},
    ]
   },
  { path: 'admin', component: AdminLayoutComponent },
];
