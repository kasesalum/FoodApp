import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  items = []

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
     
      try {
        if (this.route.queryParams) {
          this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation()) {
              const nav = this.router.getCurrentNavigation();
              if (nav.extras.state.items) {
                console.log('nav items', nav.extras.state.items)
                this.items = this.items.concat(nav.extras.state.items);
                console.log('this items', this.items);
              }
            }
      
        })
      }
    
      } catch(e) {
        console.log(e);
      }
  }

  ngOnInit() {
  }

  setItems(items) {
    this.items = items;
  }

  addToCart(item) {
    this.items.forEach(element => {
      if (element.id === item.id) {
        element.quantity = element.quantity + 1;
      }
    });
  }

  removeFromCart(item) {
    this.items.forEach(element => {
      if (element.id === item.id) {
        element.quantity -= 1;
        if (element.quantity < 0) {
          element.quantity = 0;
        };
      };
    });
  }

}
