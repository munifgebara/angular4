(function() {
  var Class = ng.core.Class;
  var Component = ng.core.Component;
  var NgModule = ng.core.NgModule;
  var BrowserModule = ng.platformBrowser.BrowserModule;
  var platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic;

  var QuoteService = Class({
    constructor: function QuoteService() {
      this.quotes = sampleQuotes;
    },
    getRandomQuote: function() {
      var randomIndex = Math.floor(Math.random() * this.quotes.length);
      return this.quotes[randomIndex];
    }
  });

  var RandomQuoteComponent = Component({
    selector: 'random-quote',
    template: '<p><em>{{quote.line}}</em> - {{quote.author}}</p>'
  })
  .Class({
    constructor: [QuoteService, function RandomQuoteComponent(quoteService) {
      this.quote = quoteService.getRandomQuote();
    }]
  });

  var AppComponent = Component({
    selector: 'my-app',
    template:
      '<h1>Random Quote</h1>' +
      '<random-quote></random-quote>'
  })
  .Class({
    constructor: function AppComponent() { }
  });

  var AppModule = NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, RandomQuoteComponent],
    providers: [QuoteService],
    bootstrap: [AppComponent]
  })
  .Class({
    constructor: function() { }
  });

  platformBrowserDynamic().bootstrapModule(AppModule);

  var sampleQuotes = [
    {
      "line": "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      "author": "Brian W. Kernighan"
    },
    {
      "line": "Walking on water and developing software from a specification are easy if both are frozen.",
      "author": "Edward V Berard"
    },
    {
      "line": "It always takes longer than you expect, even when you take into account Hofstadter's Law.",
      "author": "Hofstadter's Law"
    },
    {
      "line": "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
      "author": "Rick Osborne"
    },
    {
      "line": "In theory, there is no difference between theory and practice. But, in practice, there is.",
      "author": "Jan L. A. van de Snepscheut"
    },
    {
      "line": "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
      "author": "Bill Gates"
    },
    {
      "line": "There are 2 hard problems in computer science: cache invalidation, naming things, and off-by-1 errors.",
      "author": "Leon Bambrick"
    },
    {
      "line": "Nine people can't make a baby in a month.",
      "author": "Fred Brooks"
    },
    {
      "line": "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
      "author": "Edsger Dijkstra"
    },
    {
      "line": "The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.",
      "author": "Tom Cargill"
    }
  ];

})();
