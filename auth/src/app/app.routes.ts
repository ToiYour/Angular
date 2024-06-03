import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { DasdboardComponent } from './components/dasdboard/dasdboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LayoutClientComponent } from './layouts/layout-client/layout-client.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutClientComponent,
    children: [
      {
        path: '',
        component: RegisterComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'admin',
        component: DasdboardComponent,
        canMatch: [authGuard],
      },
    ],
  },
];
