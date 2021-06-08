import { Component } from '@angular/core';

@Component({
  selector: 'catalogo-productos', //Asignar un nombre de etiqueta único
  templateUrl: './catalogo.component.html', //Asignar la ruta del archivo html que represente esta vista
  styleUrls: ['./catalogo.component.css'] //Un arreglo con las rutas de los arreglos que queremos en este componente
})
export class CatalogoComponent { //Cambiar el nombre de APPComponent por el del nuestro
  numeroProductos = 10;
  numeroPaginas = 2;
  productos = [{name:"iphone 123"}];
}
