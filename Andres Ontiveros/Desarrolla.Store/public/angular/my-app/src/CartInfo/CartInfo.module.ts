import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CartInfoComponent } from './CartInfo.component';
//import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    CartInfoComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [CartInfoComponent]
})
export class CartInfoModule { }
