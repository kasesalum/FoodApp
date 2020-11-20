import { AppPage } from './app.po';

describe('Log in with email scenario (success)', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display log in button', () => {
    expect(page.getButtonText()).toContain('LOG IN');
  });

  it('should display an email field', () => {
    expect(page.getEmailFieldsText()).toContain('Email');
  });

  it('should display a password field', () => {
    expect(page.getPasswordFieldsText()).toContain('Password');
  });



  

});
