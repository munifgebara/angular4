(function(app) {
  var Component = ng.core.Component;

  @Component({
    selector: 'my-app',
    template: `
      <h1>Random Quote</h1>
      <random-quote></random-quote>
    `
  })
  class AppComponent { }

  app.AppComponent = AppComponent;

})(window.app || (window.app = {}));
