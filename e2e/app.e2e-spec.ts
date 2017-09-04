import { Angular4appPage } from './app.po';

describe('angular4app App', function() {
  let page: Angular4appPage;

  beforeEach(() => {
    page = new Angular4appPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
