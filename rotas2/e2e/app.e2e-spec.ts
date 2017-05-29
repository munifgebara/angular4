import { Rotas1Page } from './app.po';

describe('rotas1 App', () => {
  let page: Rotas1Page;

  beforeEach(() => {
    page = new Rotas1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
