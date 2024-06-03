import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from './services/auth.service';
export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  return authService.user.pipe(
    map((user) => {
      if (user) {
        return true;
      } else {
        return router.createUrlTree(['/login']);
      }
    })
  );
};
