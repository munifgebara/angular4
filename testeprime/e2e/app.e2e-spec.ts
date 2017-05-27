import { TesteprimePage } from './app.po';

describe('testeprime App', () => {
  let page: TesteprimePage;

  beforeEach(() => {
    page = new TesteprimePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
