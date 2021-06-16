import { 
  Component,
  OnInit
 } from '@angular/core';
declare var $:any;

import { Singleton } from '../../refactoring/DataSingleton';

@Component({
  selector: 'main-menu', // Asignar un nombre de etiqueta, únio
  templateUrl: './menuHeader.html', // Asignar la ruta del archivo .html que represente esta vista
  styleUrls: ['./menuHeader.css'] // Un arreglo con las rutas de los CSS que queremos en este componente
})

// Debemos asignarle el nombre de nuestro componente
// 
//  Cambiar el nombre de AppComponent por el del nuestro
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    var self = this
    this.ReloadCart();
    Singleton.GetInstance().ReloadCart = function() { self.ReloadCart(); };
  } 

  ReloadCart(){
    var self = this
    console.log('Ejecutando LoadCart')
    $.ajax({
      type: 'GET',
      xhrFields: {
        withCredentials: true
      },
      url: 'http://localhost:666/carts/getCart',
      success: function(cartInfo: any){
        self.numberProducts = cartInfo.quantity;
        console.log('Carrito: ')
        console.log(cartInfo)
      }
    })

  }

  accountRedirect = 'Login';
  numberProducts = 0;
}
