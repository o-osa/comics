import { Injectable } from '@angular/core';
import {Product} from './product';

@Injectable()
export class ProductService {

  constructor() { }

  getProduct(): Promise<Product> {
    return Promise.resolve(this.getProductImpl());
  }

  getProductImpl() {
    return new Product(1, 'title', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkrD3dIGNRyswbzTte9erpOKeDp4tQUfoFDuhQcqo3nhSZ1mEhCQ');
  }
}
