import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ProductsComponent} from './products/products.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [{path: '', redirectTo: '/home', pathMatch: 'full'}, {
  path: 'home',
  component: HomeComponent
}, {path: 'products', component: ProductsComponent}, {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
