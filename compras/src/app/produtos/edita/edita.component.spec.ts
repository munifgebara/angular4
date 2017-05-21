import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaComponent } from './edita.component';

describe('EditaComponent', () => {
  let component: EditaComponent;
  let fixture: ComponentFixture<EditaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
