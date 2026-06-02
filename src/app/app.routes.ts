import { Routes } from '@angular/router';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { AdminLayoutComponent } from '../layout/admin-layout/admin-layout.component';
import { HomeComponent } from '../pages/home/home.component';

import { CartComponent } from '../pages/cart/cart.component';
import { ProductListComponent } from './features/products/pages/product-list/product-list.component';
import { DashboardComponent } from './features/admin/pages/dashboard/dashboard.component';
import { ProductsComponent } from './features/admin/pages/products/products.component';
import { CategoriesComponent } from './features/admin/pages/categories/categories.component';

export const routes: Routes = [
  { path: '', component: MainLayoutComponent,
    children: [
        {path: '', component: HomeComponent},
        {path: 'products', component: ProductListComponent},
        {path: 'cart', component: CartComponent},
    ]
   },
  { path: 'admin', component: AdminLayoutComponent,
    children:[
      {path: 'products', component: ProductsComponent},
      {path: 'categories', component: CategoriesComponent},
      {path: '', component: DashboardComponent},
    ]   },
];
