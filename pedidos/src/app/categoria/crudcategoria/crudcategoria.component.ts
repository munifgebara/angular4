import { Component, OnInit } from '@angular/core';
import { CategoriaService} from '../../categoria.service';
import { SuperCrud} from '../../comum/supercrud.component';

@Component({
  selector: 'crudcategoria',
  templateUrl: './crudcategoria.component.html',
  styleUrls: ['./crudcategoria.component.css']
})
export class CrudcategoriaComponent extends SuperCrud implements OnInit {
  constructor(service: CategoriaService) {
    super(service);
  }
}
