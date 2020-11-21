import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getPageTitle() {
    return element(by.css('ion-title')).getText();
  }

  getButtonText() {
    return element(by.tagName('ion-button')).getText();
  }

  getEmailFieldsText() {
    return element.all(by.css('.email')).all(by.tagName('ion-label')).getText();
  }

  async enterEmail(email) {
    await element(by.css('ion-input[formControlName="email"] input')).sendKeys(email);
  }

  async enterPassword(password) {
    await element(by.css('ion-input[formControlName="password"] input')).sendKeys(password);
  }

  async clickLogIn() {
    await element(by.tagName('ion-button')).click();
    
  }

  getPasswordFieldsText() {
    return element.all(by.css('.password')).all(by.tagName('ion-label')).getText();
  }

  getCurrentUrl() {
  
    return browser.getCurrentUrl();
  }
}
