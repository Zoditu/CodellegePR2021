import {
    Component
  } from '@angular/core';
  
  @Component({
    selector: 'AcercaDe', //Asignar un nombre de etiqueta, único
    templateUrl: './AcercaDe.html', //Asignar la ruta del archivo .html que represente esta vista
    styleUrls: ['./AcercaDe.css'] //Un arreglo con las rutas de los CSS que queremos en este componente
  })
  //Debemos asignarle el nombre de nuestro componente.
  //Ejemplo: Si se llama catalogo.component.ts, debemos exportar CatalogoComponent
  export class AcercaDeComponent { //Cambiar el nombre de AppComponent por el del nuestro
  
  }
  