import { Injectable } from '@angular/core';
import {Product} from './product';

@Injectable()
export class ProductService {

  constructor() { }

  getProduct(): Promise<Product> {
    return Promise.resolve(this.getProductImpl());
  }

  getProductImpl() {
    return new Product(1, 'title', 'url');
  }
}
