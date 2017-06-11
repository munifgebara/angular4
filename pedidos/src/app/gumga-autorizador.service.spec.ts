import { TestBed, inject } from '@angular/core/testing';

import { GumgaAutorizadorService } from './gumga-autorizador.service';

describe('GumgaAutorizadorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GumgaAutorizadorService]
    });
  });

  it('should be created', inject([GumgaAutorizadorService], (service: GumgaAutorizadorService) => {
    expect(service).toBeTruthy();
  }));
});
