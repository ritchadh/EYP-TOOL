import { EYPTOOLPage } from './app.po';

describe('eyp-tool App', () => {
  let page: EYPTOOLPage;

  beforeEach(() => {
    page = new EYPTOOLPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
