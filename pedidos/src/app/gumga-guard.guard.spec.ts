import { TestBed, async, inject } from '@angular/core/testing';

import { GumgaGuardGuard } from './gumga-guard.guard';

describe('GumgaGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GumgaGuardGuard]
    });
  });

  it('should ...', inject([GumgaGuardGuard], (guard: GumgaGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
