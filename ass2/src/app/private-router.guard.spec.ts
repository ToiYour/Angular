import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { privateRouterGuard } from './private-router.guard';

describe('privateRouterGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => privateRouterGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
