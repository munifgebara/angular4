import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rota3Component } from './rota3.component';

describe('Rota3Component', () => {
  let component: Rota3Component;
  let fixture: ComponentFixture<Rota3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rota3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rota3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
