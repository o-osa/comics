import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../service/product.service';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {ProductDialogComponent} from '../product-dialog/product-dialog.component';

@Component({
  selector: 'app-product-frame',
  templateUrl: './product-frame.component.html',
  styleUrls: ['./product-frame.component.scss'],
})
export class ProductFrameComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService,  private modalService: NgbModal) { }

  ngOnInit() {
     this.loadProduct();
  }

  loadProduct(): void {
    this.productService.getProduct().then(product => this.product = product);
  }

  clickProduct(productId: number): void {
    const options: NgbModalOptions = {windowClass: 'product-dialog'};
    const componentInstance: ProductDialogComponent = this.modalService.open(ProductDialogComponent, options).componentInstance;
    componentInstance.productId = productId;
  }
}
