import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UsuarioComponent } from './Usuario';
//import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [UsuarioComponent]
})
export class UsuarioModule { }
