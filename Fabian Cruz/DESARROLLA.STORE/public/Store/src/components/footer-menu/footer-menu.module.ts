import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Se importa el componente
// Es importante asignar el nombre igual al que exportamos en el archivo component.ts
import { FooterComponent } from './footer-menu';

@NgModule({
  declarations: [
    FooterComponent // Se añae el componente importado arriba
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [FooterComponent] //Si se le desea añadir bootstrap a este componente
})


export class FooterModule { } // Exportar este modulo con el mismo nombre de nuestro componente
// Ejemplo: Si mi componente es catalogo.component.ts, entonces debo exportar CatalogoModule