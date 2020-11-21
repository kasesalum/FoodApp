import { browser, by, element } from 'protractor';

export class SearchPage {

    async getPageTitle() {
        await  element(by.tagName('ion-title'));
        return element(by.tagName('ion-title')).getText();
    }

    navigateTo() {
        return browser.get('/search');
    }

    get title() {
        return element(by.tagName('ion-title'));
    }

    async enterSearchWord(keyword) {
        await element(by.css('ion-searchbar input')).sendKeys(keyword);
    }

    async clickSearch() {
        await element(by.tagName('ion-button')).click();    
    }

}
  