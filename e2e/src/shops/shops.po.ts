import { browser, by, element } from 'protractor';

export class ShopsPage {
    
    async getPageTitle() {
        await  element(by.className('shops-title'));
        return element(by.className('shops-title')).getText();
    }

    navigateTo() {
        return browser.get('/shops');
    }

    async getFilter() {
        await element(by.css('ion-label[class="filter"]'));
        return element(by.css('ion-label[class="filter"]')).getText();
    }

    async getResults() {
        await element.all(by.tagName('ion-item')).all(by.className('shop-result'));
        return element.all(by.tagName('ion-item')).all(by.className('shop-result')).getText();
    }
}