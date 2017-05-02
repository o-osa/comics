import {Component, Input, OnInit} from '@angular/core';
import {SlideInfo} from '../slide-info';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css']
})
export class ProductCarouselComponent implements OnInit {

  @Input() slides: SlideInfo[];

  constructor() { }

  ngOnInit() {
  }

}
