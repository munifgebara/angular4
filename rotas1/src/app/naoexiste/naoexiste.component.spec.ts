import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaoexisteComponent } from './naoexiste.component';

describe('NaoexisteComponent', () => {
  let component: NaoexisteComponent;
  let fixture: ComponentFixture<NaoexisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaoexisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaoexisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
