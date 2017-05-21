import { ComprasPage } from './app.po';

describe('compras App', () => {
  let page: ComprasPage;

  beforeEach(() => {
    page = new ComprasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
