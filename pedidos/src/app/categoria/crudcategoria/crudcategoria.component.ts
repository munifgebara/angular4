import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';
import { CategoriaService} from '../../categoria.service';

@Component({
  selector: 'crudcategoria',
  templateUrl: './crudcategoria.component.html',
  styleUrls: ['./crudcategoria.component.css']
})
export class CrudcategoriaComponent implements OnInit {

  msgs: Message[] = [];

  constructor(private service: CategoriaService) {
  }

  ngOnInit() {
    this.service.errorHandler = error => this.error(error);
  }

  error(erro) {
    console.log(erro);
    this.msgs = [];
    this.msgs.push({severity:'error', summary:'Error Message', detail:erro});
    
  }

}
