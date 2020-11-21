import { browser, by, element } from 'protractor';

export class LoginPage {
    navigateTo() {
      return browser.get('/');
    }
  
    getPageTitle() {
      return element(by.css('ion-title')).getText();
    }
  
    getButtonText() {
      return element(by.tagName('ion-button')).getText();
    }
  
    async getEmailFieldsText() {
      await element.all(by.css('.email')).all(by.tagName('ion-label'));
      return element.all(by.css('.email')).all(by.tagName('ion-label')).getText();
    }

    get errorMessage() {
      return element.all(by.css('.error-message'));
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
  
    async getPasswordFieldsText() {
      await element.all(by.css('.password')).all(by.tagName('ion-label'));
      return element.all(by.css('.password')).all(by.tagName('ion-label')).getText();
    }
  
    getCurrentUrl() {
    
      return browser.getCurrentUrl();
    }
  }
  