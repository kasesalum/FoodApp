import { DetailsPage } from "../details/details.po";
import { ShopsPage } from "../shops/shops.po";
import { CartPage } from './cart.po';

describe('Search for items in a store by name', () => {
    let shopsPage: ShopsPage;
    let detailsPage: DetailsPage;
    let cartPage: CartPage;

    beforeEach(() => {
        detailsPage = new DetailsPage();
        shopsPage = new ShopsPage();
        cartPage = new CartPage();
        shopsPage.navigateTo();
        shopsPage.clickOnShop();
    });

    it('should add to cart', () => {
        detailsPage.clickAddQuantity();
      
        detailsPage.clickAddToCart();
        expect(cartPage.getPageTitle()).toEqual('Your cart');
        expect(cartPage.getItemName()).toContain('Juust');
        expect(cartPage.getItemQuantity()).toEqual('Quantity: 1');
       
    })
});