import { Component, OnInit } from '@angular/core';
import {AutenticacaoService} from '../autenticacao.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private autenticacaoService:AutenticacaoService) { 

  }

  ngOnInit() {
  }



}
