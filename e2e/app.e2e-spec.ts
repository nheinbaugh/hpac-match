import { HpacYourMatchPage } from './app.po';

describe('hpac-your-match App', function() {
  let page: HpacYourMatchPage;

  beforeEach(() => {
    page = new HpacYourMatchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
