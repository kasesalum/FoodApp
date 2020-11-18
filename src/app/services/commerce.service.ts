import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommerceService {

  constructor(
    private http: HttpClient
  ) { }

  getCommerces() {
    return this.http.get('http://www.json-generator.com/api/json/get/cgnHYHiqtK?indent=2');
  }
}
