import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Quote } from './quote.model';

@Injectable()
export class QuoteService {

  constructor(private http: Http) { }

  getQuoteOfTheDay(): Promise<Quote> {
    return this.http.get('/quote.json').toPromise()
      .then(response => response.json());
  }

}
