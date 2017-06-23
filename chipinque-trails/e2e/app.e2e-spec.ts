import { ChipinqueTrailsPage } from './app.po';

describe('chipinque-trails App', () => {
  let page: ChipinqueTrailsPage;

  beforeEach(() => {
    page = new ChipinqueTrailsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
