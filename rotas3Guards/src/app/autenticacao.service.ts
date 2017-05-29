import { Injectable } from '@angular/core';

@Injectable()
export class AutenticacaoService {

  url:String;

  estaLogado:boolean=false;

  constructor() { }

  login(){
    this.estaLogado=true;
  }
  logout(){
    this.estaLogado=false;
  }


}
