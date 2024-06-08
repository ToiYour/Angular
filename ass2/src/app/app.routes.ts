import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { LayoutClientComponent } from './layouts/layout-client/layout-client.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { privateRouterGuard } from './private-router.guard';

export const routes: Routes = [
  {
    path: 'products',
    canActivate: [privateRouterGuard],
    component: LayoutClientComponent,
    children: [
      {
        path: '',
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
    ],
  },
  {
    path: '',
    component: LayoutClientComponent,
    children: [
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
];
