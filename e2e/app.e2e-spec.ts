import { GarabatosPage } from './app.po';

describe('garabatos App', () => {
  let page: GarabatosPage;

  beforeEach(() => {
    page = new GarabatosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
