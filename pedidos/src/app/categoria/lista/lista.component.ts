import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {CategoriaService} from '../../categoria.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

 lista:any[];
 selecionado = {};

         cols = [
            {field: 'nome', header: 'Nome'},
            {field: 'version', header: 'Versão'}
        ];

  constructor(private service:CategoriaService,private router:Router,private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.atualiza();
  }

  atualiza(){
    this.service.getAll().then(response=>{
      this.lista=response.values;
    });
  }

  limpa(){
    this.selecionado={};
  }

  edita(id) {
    this.router.navigate(['detalhes',id],{relativeTo: this.route});
  }

  remove(id) {
    this.service.remove(id)
      .then(() => this.atualiza());    
  }

  save(objeto) {
    if (objeto.id) {
      this.service.update(objeto)
        .then(() => this.atualiza());
    } else {
      this.service.add(objeto)
        .then(() => this.atualiza());
    }
    this.limpa();
  }
}
