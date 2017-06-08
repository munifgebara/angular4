import { Http, Headers, Response } from '@angular/http';

export class SuperService {

  errorHandler = error => console.error('CategoriaService error', error);
  protected baseUrl = 'http://23.239.2.85/pedidos-api/api';
  protected collection = '';
  protected http:Http;

  constructor(colecao:string, http: Http) { 
      this.http=http;
      this.collection=colecao;
  }

  add(objeto) {
    const json = JSON.stringify(objeto);
    return this.http.post(`${this.baseUrl}/${this.collection}`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

    getAll():Promise<any> {
    return this.http.get(`${this.baseUrl}/${this.collection}`)
      .toPromise().then(response=>response.json())
      .catch(this.errorHandler);
  }

  remove(objeto) {
    return this.http.delete(`${this.baseUrl}/${this.collection}/${objeto.id}`)
      .toPromise().then(response=>response.json())
      .catch(this.errorHandler);
  }

  update(objeto) {
    return this.http.patch(`${this.baseUrl}/${this.collection}/${objeto.id}`, objeto)
      .toPromise()
      .catch(this.errorHandler);
  }

  
}
