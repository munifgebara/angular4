import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudcategoriaComponent } from './crudcategoria.component';

describe('CrudcategoriaComponent', () => {
  let component: CrudcategoriaComponent;
  let fixture: ComponentFixture<CrudcategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudcategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
