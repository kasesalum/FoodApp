import { browser, by, element } from 'protractor';

export class DetailsPage {
        
    async getPageTitle() {
        await element(by.className('details-title'));
        return element(by.className('details-title')).getText();
    }

    async enterSearchWord(keyword) {
        await element(by.css('ion-searchbar input')).sendKeys(keyword);
    }

    
    async clickSearch() {
        await element(by.css('ion-button[class="search"]')).click();    
    }

   clickAddToCart() {
        element(by.css('ion-button[class="cart"]')).click();    
    }

    clickAddQuantity() {
        element.all(by.className('add')).first().click();
    }

    async getDetailName() {
        await element(by.css('ion-col[class="name"]'));
        return element(by.css('ion-col[class="name"]')).getText();
    }

    
}