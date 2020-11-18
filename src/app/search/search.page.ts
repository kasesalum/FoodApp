import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  searchValue = '';

  ngOnInit() {}

  constructor(private router: Router) { }

  openResultsWithQueryParams() {
    const navigationExtras: NavigationExtras = {
      state: {
        search: this.searchValue === '' ? 'all' : this.searchValue
      }
    };
    this.router.navigate(['shops'], navigationExtras);
  }

}
