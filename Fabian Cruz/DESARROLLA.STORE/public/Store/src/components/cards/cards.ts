import { 
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
declare var $:any;

import { Singleton } from '../../refactoring/DataSingleton';

@Component({
  selector: 'cards', // Asignar un nombre de etiqueta, únio
  templateUrl: './cards.html', // Asignar la ruta del archivo .html que represente esta vista
  styleUrls: ['./cards.css'] // Un arreglo con las rutas de los CSS que queremos en este componente
})

// Debemos asignarle el nombre de nuestro componente
// 
//  Cambiar el nombre de AppComponent por el del nuestro
export class CardsComponent implements OnInit {
  ngOnInit(){
    this.GetProducts();
    $(".toast").toast()
    
  }

  GetProducts(){
    var self = this;
    $.ajax({
      type: 'GET',
      url: 'http://localhost:666/products/all',
      success: function(res: any) {
        self.products = res;
      }
    });
  }
  AddToCart(sku: String) {
    var self = this;
    $.ajax({
      type: 'PATCH',
      url: 'http://localhost:666/carts/add',
      xhrFields: {
        withCredentials: true
      },
      data: {
        sku: sku,
        quantity: 1
      },
      success: function(res: any) {
        // console.log('Add to cart: ')
        // console.log(res);
        $('.toast').toast('show');
        Singleton.GetInstance().ReloadCart();
      }
    })
  }
  products = null;
}
