import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  private id:String="NADA";

  constructor(private route: ActivatedRoute,  private location: Location) { 

  }

  ngOnInit() {
    console.log("Inicializando componente Detalhes");

    this.route.params
    .switchMap((params: Params) => this.carrega(params['id']))
    .subscribe(id =>this.id = id);



  }

  carrega(id: String): Promise<String> { //Deve ser Substituida por uma chamada ao service
    console.log("carrando",id);
    return new Promise(resolve => {
      setTimeout(() => resolve(id), 200); // Simula atraso do server 
    });
  }



}
