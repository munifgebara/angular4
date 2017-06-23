import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExobservableComponent } from './exobservable.component';

describe('ExobservableComponent', () => {
  let component: ExobservableComponent;
  let fixture: ComponentFixture<ExobservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExobservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExobservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
