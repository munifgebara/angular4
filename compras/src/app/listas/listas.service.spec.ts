import { TestBed, inject } from '@angular/core/testing';

import { ListasService } from './listas.service';

describe('ListasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListasService]
    });
  });

  it('should be created', inject([ListasService], (service: ListasService) => {
    expect(service).toBeTruthy();
  }));
});
