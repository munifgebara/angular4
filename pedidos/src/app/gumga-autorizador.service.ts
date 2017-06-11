import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class GumgaAutorizadorService {

  protected loginUrl = 'http://127.0.0.1:8084/pedidos-api/public/token';

  protected token="";
  logado=false;
  url="";
  constructor(private http: Http) { 

  }

  getToken(){
    return this.token;
  }

  login(usuario:string,senha:string){
    return this.http.post(this.loginUrl,{user:usuario,password:senha}).toPromise().then(
      response=>{
        let resposta=response.json();
        console.log(resposta);
        this.logado=true;
        this.token=resposta.token;
      }
    );

  }

}
