import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ListasService {

  errorHandler = error => console.error('ProdutosService error', error);
  private baseUrl = 'https://treinamento-e575b.firebaseio.com/';
  private collection = 'listas';

  constructor(private http: Http) { }

  add(objeto) {
    const json = JSON.stringify(objeto);
    return this.http.post(`${this.baseUrl}/${this.collection}.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

    getAll():Promise<any[]> {
    return this.http.get(`${this.baseUrl}/${this.collection}.json`)
      .toPromise()
      .then(response => this.convert(response.json()))
      .catch(this.errorHandler);
  }

  remove(objeto) {
    return this.http.delete(`${this.baseUrl}/${this.collection}/${objeto.id}.json`)
      .toPromise()
      .catch(this.errorHandler);
  }

  update(objeto) {
    const json = JSON.stringify({
      nome: objeto.nome,
      produtos: objeto.produtos
    });
    return this.http.patch(`${this.baseUrl}/${this.collection}/${objeto.id}.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

  private convert(parsedResponse) {
    return Object.keys(parsedResponse)
      .map(id => ({
        id: id,
        nome: parsedResponse[id].nome,
        produtos: parsedResponse[id].produtos
      }))
      .sort((a, b) => a.nome.localeCompare(b.nome));
  }


}
