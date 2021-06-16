import { Component } from '@angular/core';

@Component({
  selector: 'Cart-Info', //Asignar un nombre de etiqueta único
  templateUrl: './CartInfo.component.html', //Asignar la ruta del archivo html que represente esta vista
  styleUrls: ['./CartInfo.component.css'] //Un arreglo con las rutas de los arreglos que queremos en este componente
})
export class CartInfoComponent { //Cambiar el nombre de APPComponent por el del nuestro
 
      TotalProductos= 20;
      TotalPagar= 500;

  DetallePedido = {
          Nombre: "Juan Andres",
          Apellidos: "Ontiveros Chairez",
          DireccionEnvio: "San Pedro",
          Telefono: 8119798094
  };
}
