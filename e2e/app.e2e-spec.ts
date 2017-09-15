import { CircRefPage } from './app.po';

describe('circ-ref App', () => {
  let page: CircRefPage;

  beforeEach(() => {
    page = new CircRefPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
