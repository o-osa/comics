import {SlideInfo} from '../slide-info';
import {Product} from '../product';

export abstract class ProductService {
  getProduct:() => Promise<Product>;

  getSlides:(productId: number) => Promise<SlideInfo[]>;
}
