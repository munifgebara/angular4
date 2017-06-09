import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CategoriaService } from '../../categoria.service';
import { SuperDetalhes } from '../../comum/superdetalhes.component';



@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent extends SuperDetalhes implements OnInit {

  constructor(service: CategoriaService, router: Router,route: ActivatedRoute) {
    super(service,router,route);
  }

}
