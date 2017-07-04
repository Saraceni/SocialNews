import { Ng2CribsPage } from './app.po';

describe('ng2-cribs App', () => {
  let page: Ng2CribsPage;

  beforeEach(() => {
    page = new Ng2CribsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
