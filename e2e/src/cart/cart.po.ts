import { browser, by, element } from 'protractor';

export class CartPage {
        
    getPageTitle() {
        return element(by.className('cart-title')).getText();
    }

    async getItemName() {
        await element(by.css('ion-col[class="name"]'));
        return element(by.css('ion-col[class="name"]')).getText();
    }

    async getItemQuantity() {
        await element(by.css('ion-col[class="quantity"]'));
        return element(by.css('ion-col[class="quantity"]')).getText();
    }
}
