import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaoExisteComponent } from './nao-existe.component';

describe('NaoExisteComponent', () => {
  let component: NaoExisteComponent;
  let fixture: ComponentFixture<NaoExisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaoExisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaoExisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
