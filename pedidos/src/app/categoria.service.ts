import { Injectable } from '@angular/core';
import { SuperService} from './comum/superservice.service';
import { Http, Headers, Response } from '@angular/http';
import { GumgaAutorizadorService} from './gumga-autorizador.service';

@Injectable()
export class CategoriaService extends SuperService{

  constructor( http: Http,a:GumgaAutorizadorService) {
    super('categoria',http,a);
   }

  filtra(filtro):Promise<any> {
    return this.http.get(`${this.baseUrl}/${this.collection}?searchFields=nome&q=${filtro}`)
      .toPromise().then(response=>response.json())
      .catch(this.errorHandler);
  }
  
}
