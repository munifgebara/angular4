import { Component } from '@angular/core';
import { Quote } from './quote.model';
import { QuoteService } from './quote.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>Quote Of The Day</h1>
    <p><em>{{quote?.line}}</em> - {{quote?.author}}</p>
  `
})
export class AppComponent {

  quote: Quote;

  constructor(quoteService: QuoteService) {
    let obj=quoteService.getQuoteOfTheDay();

      obj.then(quote => this.quote = quote);
  }

}
