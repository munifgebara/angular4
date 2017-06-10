import { Http, Headers, Response } from '@angular/http';

export class SuperService {

  protected baseUrl = 'http://23.239.2.85/pedidos-api/api';
  protected collection = '';
  protected http:Http;

  constructor(colecao:string, http: Http) { 
      this.http=http;
      this.collection=colecao;
  }

  errorHandler = error => console.error('CategoriaService error', error);
  
  add(objeto) {
    return this.http.post(`${this.baseUrl}/${this.collection}`, objeto)
      .toPromise()
      .catch(this.errorHandler);
  }

  getAll():Promise<any> {
    return this.http.get(`${this.baseUrl}/${this.collection}`)
      .toPromise().then(response=>response.json())
      .catch(this.errorHandler);
  }

  getOne(id):Promise<any> {
    return this.http.get(`${this.baseUrl}/${this.collection}/${id}`)
      .toPromise().then(response=>response.json())
      .catch(this.errorHandler);
  }

  newObject():Promise<any> {
    return this.http.get(`${this.baseUrl}/${this.collection}/new`)
      .toPromise().then(response=>response.json())
      .catch(this.errorHandler);
  }

  remove(id) {
    return this.http.delete(`${this.baseUrl}/${this.collection}/${id}`)
      .toPromise().then(response=>response.json())
      .catch(this.errorHandler);
  }

  update(objeto) {
    return this.http.put(`${this.baseUrl}/${this.collection}/${objeto.id}`, objeto)
      .toPromise().then(response=>response.json())
      .catch(this.errorHandler);
  }

  
}
