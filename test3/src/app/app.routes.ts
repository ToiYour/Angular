import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { privateRouterGuard } from './private-router.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [privateRouterGuard],
    component: ProductListComponent,
  },
  {
    path: 'add',
    component: ProductAddComponent,
  },
  {
    path: ':id/edit',
    component: ProductUpdateComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
