import { Quote } from './quote.model';

export class QuoteService {

  private quotes: Quote[] = sampleQuotes;

  private getRandomQuote(): Quote {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    return this.quotes[randomIndex];
  }

  generateRandomQuotes(delay: number, callback: (quote: Quote) => void) {
    callback(this.getRandomQuote());
    setTimeout(() => callback(this.getRandomQuote()), delay);
  }

}

const sampleQuotes: Quote[] = [
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
