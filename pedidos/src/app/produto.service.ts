import { Injectable } from '@angular/core';
import { SuperService} from './comum/superservice.service';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class ProdutoService extends SuperService{

  constructor( http: Http) {
    super('produto',http);
   }

    filtra(filtro):Promise<any> {
    return this.http.get(`${this.baseUrl}/${this.collection}?searchFields=nome&q=${filtro}`)
      .toPromise().then(response=>response.json())
      .catch(this.errorHandler);
  }
}
