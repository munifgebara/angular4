(function(app) {
  var Component = ng.core.Component;
  var Inject = ng.core.Inject;
  var QuoteService = app.QuoteService;

  @Component({
    selector: 'random-quote',
    template: '<p><em>{{quote.line}}</em> - {{quote.author}}</p>'
  })
  class RandomQuoteComponent {

    constructor(@Inject(QuoteService) quoteService) {
      quoteService.generateRandomQuotes(2000, quote => this.quote = quote);
    }

  }

  app.RandomQuoteComponent = RandomQuoteComponent;

})(window.app || (window.app = {}));
