import { Component, OnInit } from '@angular/core';
import {CategoriaService} from '../../categoria.service';

@Component({
  selector: 'crudcategoria',
  templateUrl: './crudcategoria.component.html',
  styleUrls: ['./crudcategoria.component.css']
})
export class CrudcategoriaComponent implements OnInit {

  listaCategoria:any[];

  constructor(private categoriaService:CategoriaService) { }

  ngOnInit() {
    this.atualiza();
  }

  salva(){
    let objeto={
      nome:"nova"
    }
    this.categoriaService.add(objeto).then(response=>{
      console.log(response);
    });
  }

  altera(){
    let objeto={id:3,oi:null,version:1,nome:"nova3"}
    this.categoriaService.update(objeto).then(response=>{
      console.log(response);
    });

  }

  exclui(){
    let objeto={id:3}
    this.categoriaService.remove(objeto).then(response=>{
      console.log(response);
    });
  }


  atualiza(){
    this.categoriaService.getAll().then(response=>{
      this.listaCategoria=response.values;
    });
  }

}
