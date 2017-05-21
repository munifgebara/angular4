import { Component, OnInit } from '@angular/core';
import { ListasService } from '../listas.service';

@Component({
  selector: 'app-crud-listas',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  lista = [];
  selecionado = {};

  constructor(private service:ListasService) { 
    service.errorHandler = error =>
      window.alert('Problemas.'+error);
    this.reload();
  }

  clear() {
    this.selecionado = {};
  }

  edit(objeto) {
    this.selecionado = Object.assign({}, objeto);
  }

  remove(objeto) {
    this.service.remove(objeto)
      .then(() => this.reload());    
  }

  save(objeto) {
    if (objeto.id) {
      this.service.update(objeto)
        .then(() => this.reload());
    } else {
      this.service.add(objeto)
        .then(() => this.reload());
    }
    this.clear();
  }

  private reload() {
    return this.service.getAll()
      .then(lista =>{ 
        this.lista = lista
      });
  }


  ngOnInit() {
  }

}
