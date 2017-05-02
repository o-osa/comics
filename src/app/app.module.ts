import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {HamburgerComponent} from './components/hamburger/hamburger.component';
import {AboutComponent} from './about/about.component';
import {ProductsComponent} from './products/products.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import { ProductFrameComponent } from './products/product-frame/product-frame.component';
import {ProductServiceDummy} from './products/service/product.service.dummy';
import { ProductDialogComponent } from './products/product-dialog/product-dialog.component';
import { ProductCarouselComponent } from './products/product-carousel/product-carousel.component';
import {ProductService} from './products/service/product.service';

@NgModule({
  declarations: [
    AppComponent,
    HamburgerComponent,
    AboutComponent,
    ProductsComponent,
    HomeComponent,
    ProductFrameComponent,
    ProductDialogComponent,
    ProductCarouselComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    {provide: ProductService, useClass: ProductServiceDummy}],
  bootstrap: [AppComponent],
  entryComponents: [ProductDialogComponent]
})
export class AppModule {
}
