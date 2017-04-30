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
import {ProductService} from './products/product.service';

@NgModule({
  declarations: [
    AppComponent,
    HamburgerComponent,
    AboutComponent,
    ProductsComponent,
    HomeComponent,
    ProductFrameComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
