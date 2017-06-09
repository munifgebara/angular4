import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CategoriaService } from '../../categoria.service';



@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  selecionado = {};
  items = [
    {
      label: 'Cancelar', icon: 'fa-close', command: () => {
        this.cancelar();
      }
    }]

  constructor(private service: CategoriaService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.service.getOne(params['id']))
      .subscribe((objeto) => {
        console.log(objeto);
        this.selecionado = objeto;
      });
  }

  cancelar() {
    this.router.navigate(['../..'], { relativeTo: this.route });
  }

  salvar() {
    this.service.add(this.selecionado)
      .then((data) => this.router.navigate(['../..'], { relativeTo: this.route }));


  }

}
