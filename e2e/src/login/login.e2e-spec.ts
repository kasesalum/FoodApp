import { browser, protractor } from 'protractor';
import { SearchPage } from '../search/search.po';
import { LoginPage } from "./login.po";

describe('Login', () => {
    let page: LoginPage;
    
    let searchPage: SearchPage;
    let correctEmail = "merlin@ut.ee";
    let correctPassword = "Merlin";
    let incorrectEmail = "merlin@tlu.ee";
    let incorrectPassword = "Hmm";
  
    beforeEach(() => {
      page = new LoginPage();
      searchPage = new SearchPage();
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

    it('should log in successfully', () => {
      page.enterEmail(correctEmail);
      page.enterPassword(correctPassword);
      page.clickLogIn();
      expect(searchPage.getPageTitle()).toBe("Search");
    });
  
    it('should not log in successfully (wrong email)', () => {
      page.enterEmail(incorrectEmail);
      page.enterPassword(correctPassword);
      page.clickLogIn();
      expect(page.errorMessage).toBeTruthy;
    });

    it('should not log in successfully (wrong password)', () => {
      page.enterEmail(correctEmail);
      page.enterPassword(incorrectPassword);
      page.clickLogIn();
      expect(page.errorMessage).toBeTruthy;
    });
  
  });

  