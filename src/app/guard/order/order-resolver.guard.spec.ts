import { TestBed } from '@angular/core/testing';

import { OrderResolverGuard } from './order-resolver.guard';

describe('OrderResolverGuard', () => {
  let guard: OrderResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OrderResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
