import { FavoritesPage } from './app.po';

describe('favorites App', () => {
  let page: FavoritesPage;

  beforeEach(() => {
    page = new FavoritesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
