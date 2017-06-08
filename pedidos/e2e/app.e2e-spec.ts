import { PedidosPage } from './app.po';

describe('pedidos App', () => {
  let page: PedidosPage;

  beforeEach(() => {
    page = new PedidosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
