import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CatalogoComponent } from './catalogo.component';
//import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    CatalogoComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [CatalogoComponent]
})
export class CatalogoModule { }
