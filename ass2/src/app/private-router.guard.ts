import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const privateRouterGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (typeof window != 'undefined') {
    const user = JSON.parse(window.localStorage.getItem('user') || '{}');
    console.log(user);

    if (user && user?.id != 1) {
      alert('Bạn không đủ quyền');
      router.navigate(['/login']);
      return false;
    }
  }

  return true;
};
