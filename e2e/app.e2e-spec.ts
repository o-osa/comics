import { ComicsThreePage } from './app.po';

describe('comics-three App', () => {
  let page: ComicsThreePage;

  beforeEach(() => {
    page = new ComicsThreePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
