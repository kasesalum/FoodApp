import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Item } from '../models/item';
import { CommerceService } from '../services/commerce.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.page.html',
  styleUrls: ['./shops.page.scss'],
})
export class ShopsPage implements OnInit {

  searchFilter: any;
  items: Item[] = [];
  itemsFiltered: Item[] = [];
  notFoundError = false;

  constructor(private route: ActivatedRoute, private router: Router, public commerceService: CommerceService) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.searchFilter = this.router.getCurrentNavigation().extras.state.search;
      }
    });
  }

  ngOnInit() {
    this.commerceService.getCommerces()
      .subscribe(
        (data: Item[]) => {
          console.log(data);
          this.items = data;
          if (this.items.length > 0) {
            if (this.searchFilter !== 'all') {
              this.items.forEach(element => {
                const commerce = element.name.toLowerCase();
                const address = element.address.toLowerCase();
                if (commerce.includes(this.searchFilter.toLowerCase())) {
                  this.itemsFiltered.push(element);
                } else if (address.includes(this.searchFilter.toLowerCase())) {
                  this.itemsFiltered.push(element);
                } else {
                  element.offers.forEach(menu => {
                    const name = menu.name.toLowerCase();
                    if (name.includes(this.searchFilter.toLowerCase())) {
                      this.itemsFiltered.push(element);
                    }
                  });
                }
              });
              this.items = this.itemsFiltered;
            }
          } else {
            this.notFoundError = true;
          }
        },
        (error) => {
          console.error(error);
        }
      );
  }

  detailsComponent(selectedItem) {
    const navigationExtras: NavigationExtras = {
      state: {
        selected: selectedItem
      }
    };
    this.router.navigate(['details'], navigationExtras);
  }

}
