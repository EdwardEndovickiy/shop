import { Cotalog3Page } from './app.po';

describe('cotalog3 App', () => {
  let page: Cotalog3Page;

  beforeEach(() => {
    page = new Cotalog3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
