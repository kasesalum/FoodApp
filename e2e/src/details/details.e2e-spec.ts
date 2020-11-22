import { DetailedPeerCertificate } from 'tls';
import { ShopsPage } from "../shops/shops.po"
import { DetailsPage } from './details.po';

describe('Search for items in a store by name', () => {
    let shopsPage: ShopsPage;
    let detailsPage: DetailsPage;

    beforeEach(() => {
        detailsPage = new DetailsPage();
        shopsPage = new ShopsPage();
        shopsPage.navigateTo();
    });

    it('should go from shops page to details page', () => {
        shopsPage.clickOnShop();
        expect(detailsPage.getPageTitle()).toEqual('Details');
    });

    it('should go from shops page to details page', () => {
        shopsPage.clickOnShop();
        detailsPage.enterSearchWord('Juust');
        detailsPage.clickSearch();
        expect(detailsPage.getDetailName()).toEqual('Juust');

    });


})