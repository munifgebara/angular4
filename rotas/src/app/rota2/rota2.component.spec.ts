import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rota2Component } from './rota2.component';

describe('Rota2Component', () => {
  let component: Rota2Component;
  let fixture: ComponentFixture<Rota2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rota2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rota2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
