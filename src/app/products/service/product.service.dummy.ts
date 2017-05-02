import { Injectable } from '@angular/core';
import {Product} from '../product';
import {SlideInfo} from '../slide-info';
import {ProductService} from './product.service';

@Injectable()
export class ProductServiceDummy implements ProductService {

  constructor() { }

  getProduct(): Promise<Product> {
    return Promise.resolve(this.getProductImpl());
  }

  getProductImpl() {
    return new Product(1, 'title', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkrD3dIGNRyswbzTte9erpOKeDp4tQUfoFDuhQcqo3nhSZ1mEhCQ');
  }

  getSlides(productId: number): Promise<SlideInfo[]> {
    const slides: Array<SlideInfo> = [new SlideInfo('slide1','https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS4bsPKuMCV0wTAlqhMz34TF5OVX0a6BQ0alxcm1_aLIjNal9Dwkw', 'Description'),
      new SlideInfo('slide2','https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSs220fD8s-zJ26TNujpRBrE2aR6oXALDIhnTi4IiXNFGOEkfcp1g', 'Description2')
    ];

    return Promise.resolve(slides);
  }

}
