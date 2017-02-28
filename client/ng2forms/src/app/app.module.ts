import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { NgSemanticModule } from "ng-semantic";
import { ReactiveFormsModule } from '@angular/forms'
import { FormioModule } from 'ng2-formio';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';


import { SDKBrowserModule } from './sdk/index';


@NgModule({
  imports: [
    BrowserModule, 
    NgbModule.forRoot(),
    SDKBrowserModule.forRoot(),
    ReactiveFormsModule,
    FormioModule,
    NgSemanticModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      }, {
        path: 'products',
        component: ProductComponent
      }, {
        path: 'home',
        component: HomeComponent
      }
    ])],
  declarations: [AppComponent, ProductComponent, HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
