import { ShopsPage } from '../shops/shops.po';
import { SearchPage } from "./search.po";

/**
 * describe('Search for stores by address', () => {
    let page: SearchPage;
    let shopsPage: ShopsPage;
  
    beforeEach(() => {
      page = new SearchPage();
      shopsPage = new ShopsPage();
      page.navigateTo();
    });

    it('should display stores in Tartu', () => {
        page.enterSearchWord('Tartu');
        page.clickSearch();
        expect(shopsPage.getPageTitle()).toContain('Shops');
        shopsPage.getFilter().then(res => console.log('hmm', res));
        expect(shopsPage.getFilter()).toContain('Search: Tartu');
        //shopsPage.getResults().then(results => console.log("results yoo", results));
        expect(shopsPage.getResults()).toContain('Veeriku Selver Vitamiini 1, 50412 Tartu +1 (864) 533-3078');
    });
})

describe('Search for stores by name', () => {
    let page: SearchPage;
    let shopsPage: ShopsPage;
  
    beforeEach(() => {
      page = new SearchPage();
      shopsPage = new ShopsPage();
      page.navigateTo();
    });

    it('should display Selver stores', () => {
            
        page.enterSearchWord('Selver');
        page.clickSearch();
        expect(shopsPage.getPageTitle()).toContain('Shops');
        shopsPage.getFilter().then(res => console.log('hmm', res));
        expect(shopsPage.getFilter()).toContain('Search: Selver');
        //shopsPage.getResults().then(results => console.log("results yoo", results));
        expect(shopsPage.getResults()).toContain('Veeriku Selver Vitamiini 1, 50412 Tartu +1 (864) 533-3078');


    })
    

})


describe('Search for stores by item', () => {
    let page: SearchPage;
    let shopsPage: ShopsPage;
  
    beforeEach(() => {
      page = new SearchPage();
      shopsPage = new ShopsPage();
      page.navigateTo();
    });

    it('should display the store with Kinder Bueno', () => {        
        page.enterSearchWord('Kinder Bueno');
        page.clickSearch();
        expect(shopsPage.getPageTitle()).toContain('Shops');
        shopsPage.getFilter().then(res => console.log('hmm', res));
        expect(shopsPage.getFilter()).toContain('Search: Kinder Bueno');
        //shopsPage.getResults().then(results => console.log("results yoo", results));
        expect(shopsPage.getResults()).toContain('Veeriku Selver Vitamiini 1, 50412 Tartu +1 (864) 533-3078');

    });
    
})
 */

