import { TestBed, inject } from '@angular/core/testing';

import { ProductService } from './product.service.dummy';

describe('ProductServiceDummy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductServiceDummy]
    });
  });

  it('should ...', inject([ProductServiceDummy], (service: ProductServiceDummy) => {
    expect(service).toBeTruthy();
  }));
});
