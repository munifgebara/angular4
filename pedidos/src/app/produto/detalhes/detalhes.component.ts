import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ProdutoService } from '../../produto.service';
import { SuperDetalhes } from '../../comum/superdetalhes.component';
import { CategoriaService } from "app/categoria.service";



@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent extends SuperDetalhes implements OnInit {

  categorias = [];

  constructor(service: ProdutoService, router: Router, route: ActivatedRoute, private categoriaService: CategoriaService) {
    super(service, router, route);
  }

  ngOnInit() {
    super.ngOnInit();
    this.atualizaCategorias();

  }

  atualizaCategorias() {
    this.categoriaService.getAll().then(response => {
      this.categorias = response.values;
    });
  }

  filtrarCategorias(event) {
    let query = event.query;
    this.categoriaService.filtra(query).then(response => {
      this.categorias = response.values;
    });
  }



}
