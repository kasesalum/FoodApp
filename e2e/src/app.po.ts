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

  getPasswordFieldsText() {
    return element.all(by.css('.password')).all(by.tagName('ion-label')).getText();
  }
}
