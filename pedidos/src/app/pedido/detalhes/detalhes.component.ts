import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ProdutoService } from '../../produto.service';
import { PedidoService} from '../../pedido.service';
import { SuperDetalhes } from '../../comum/superdetalhes.component';



@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent extends SuperDetalhes implements OnInit {

  produtos = [];
  selecionado = {itens:[]};
  produto;

  constructor(service: PedidoService, router: Router, route: ActivatedRoute, private produtoService: ProdutoService) {
    super(service, router, route);
    this.items.push({label: 'Inserir', icon: 'fa-close', command: () => {this.inserirProduto();}});
  }

  inserirProduto(){
     console.log(this.selecionado.itens,this.produto);
     this.selecionado.itens.push(
         {produto:this.produto,quantidade:1}
     );
     this.produto=null;
  }

  ngOnInit() {
    super.ngOnInit();
    this.atualizaProdutos();

  }

  atualizaProdutos() {
    this.produtoService.getAll().then(response => {
      this.produtos = response.values;
    });
  }

  filtrarProdutos(event) {
    let query = event.query;
    this.produtoService.filtra(query).then(response => {
      this.produtos = response.values;
    });
  }



}

