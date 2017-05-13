import { Component } from '@angular/core';
import { Quote } from './quote.model';
import { QuoteService } from './quote.service';

@Component({
  selector: 'random-quote',
  template: '<p><em>{{quote.line}}</em> - {{quote.author}}</p>'
})
export class RandomQuoteComponent {

  quote: Quote;

  constructor(quoteService: QuoteService) {
    quoteService.generateRandomQuotes(2000, quote => this.quote = quote);
  }

}
