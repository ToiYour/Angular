import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const privateRouterGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (!localStorage.getItem('user')) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
