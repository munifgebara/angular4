import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ProdutoService} from '../../produto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SuperLista } from '../../comum/superlista.component';

@Component({
  selector: 'app-lista',
  templateUrl: '../../comum/lista.component.html',
  styleUrls:  ['../../comum/lista.component.css']
})
export class ListaComponent extends SuperLista implements OnInit {

   constructor(service:ProdutoService, router:Router, route: ActivatedRoute) { 
    super(service,router,route);
    this.cols = [ {field: 'nome', header: 'Nome'}, {field: 'quantidade', header: 'Quantidade'} ];
  }
  

}
