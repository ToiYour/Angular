import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'add', component: ProductAddComponent },
  { path: ':id/update', component: ProductUpdateComponent },
];
