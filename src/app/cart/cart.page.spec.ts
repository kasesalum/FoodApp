import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';

import { CartPage } from './cart.page';

/**
 * 
    private route: ActivatedRoute,
    private router: Router
 */


describe('CartPage', () => {
  
  let cartComponent: CartPage;
  let cartFixture: ComponentFixture<CartPage>;
  let items = [{"id": "kkkkkkkkkkkkkkk", "name": "Sushi", "price": 10, "quantity": 1}, 
  {"id": "mmmmmmmmmmmmm", "name": "Dumplings", "price": 12, "quantity": 1},  
  {"id": "ffffffffffff", "name": "Pizza so good", "price": 12, "quantity": 2},
  {"id": "eeeeeeeeeee", "name": "Soup so good", "price": 12, "quantity": 1}]

  beforeEach(async(() => {
    const router = jasmine.createSpyObj('Router', ['navigate', 'getCurrentNavigation']);
    const activatedRoute = jasmine.createSpyObj('ActivatedRoute', ['queryParams'])
    const activatedRouteMock = {
      queryParams: of({
        firstEntry: 'This is the first entry',
        secondEntry: 'This is the second entry',
      }),
    };
    TestBed.configureTestingModule({
      declarations: [ CartPage ],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/'} 
      ]
    }).compileComponents();

    cartFixture = TestBed.createComponent(CartPage);
    cartComponent = cartFixture.componentInstance;
    cartFixture.detectChanges();
  }));

  it('should create', () => {
    expect(cartComponent).toBeTruthy();
  });

  
  beforeEach(async(() => {
    cartComponent.setItems(items);
  }));

  it('should add items to the shopping cart', () => {  
    cartComponent.addToCart(items[0]);
    cartComponent.addToCart(items[1]);
    cartComponent.addToCart(items[1]);
    expect(cartComponent.items[0].quantity).toEqual(2);
    expect(cartComponent.items[1].quantity).toEqual(3);
  });

  it('should remove items from the shopping cart', () => {
    cartComponent.removeFromCart(items[2]);
    expect(cartComponent.items[2].quantity).toEqual(1);
  });


  it('should not have a negative number for quantity', () => {
    cartComponent.removeFromCart(items[3]);
    cartComponent.removeFromCart(items[3]);
    expect(cartComponent.items[3].quantity).toEqual(0);
  });
  

  afterEach(() => {
    cartFixture.destroy();
  });


});
