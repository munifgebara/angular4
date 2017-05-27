import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rota1Component } from './rota1.component';

describe('Rota1Component', () => {
  let component: Rota1Component;
  let fixture: ComponentFixture<Rota1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rota1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rota1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
