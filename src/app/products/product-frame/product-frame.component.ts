import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-frame',
  templateUrl: './product-frame.component.html',
  styleUrls: ['./product-frame.component.css'],
})
export class ProductFrameComponent implements OnInit {
  product: Product;

  constructor(private productService: ProductService ) { }

  ngOnInit() {
     this.loadProduct();
  }

  loadProduct(): void {
    this.productService.getProduct().then(product => this.product = product);
  }
}
