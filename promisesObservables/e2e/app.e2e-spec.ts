import { PromisesObservablesPage } from './app.po';

describe('promises-observables App', () => {
  let page: PromisesObservablesPage;

  beforeEach(() => {
    page = new PromisesObservablesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
