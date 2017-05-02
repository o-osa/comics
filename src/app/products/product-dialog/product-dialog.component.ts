import {Component, Inject, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {SlideInfo} from '../slide-info';
import {ProductService} from '../service/product.service';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss']
})
export class ProductDialogComponent implements OnInit {
  @Input() productId;
  slides: SlideInfo[];

  constructor(public activeModal: NgbActiveModal, private productService: ProductService) {}

  ngOnInit() {
    this.productService.getSlides(this.productId).then(slides => this.slides = slides);
  }

}
