import { TestBed, async, inject } from '@angular/core/testing';

import { AtenticadorGuard } from './atenticador.guard';

describe('AtenticadorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AtenticadorGuard]
    });
  });

  it('should ...', inject([AtenticadorGuard], (guard: AtenticadorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
