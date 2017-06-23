import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpromisesComponent } from './expromises.component';

describe('ExpromisesComponent', () => {
  let component: ExpromisesComponent;
  let fixture: ComponentFixture<ExpromisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpromisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpromisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
