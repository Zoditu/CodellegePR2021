import { 
    Component,
    OnInit
  } from '@angular/core';
  declare var $:any;

  import { Singleton } from '../../refactoring/DataSingleton';
    
  @Component({
    selector: 'cart', // Asignar un nombre de etiqueta, únio
    templateUrl: './cart.html', // Asignar la ruta del archivo .html que represente esta vista
    styleUrls: ['./cart.css'] // Un arreglo con las rutas de los CSS que queremos en este componente
  })
  
  // Debemos asignarle el nombre de nuestro componente
  // 
  //  Cambiar el nombre de AppComponent por el del nuestro
  export class CartComponent implements OnInit {
    ngOnInit(): void {
      var self = this
      this.GetCart();
      Singleton.GetInstance().GetCart = function() { self.GetCart(); };
    } 
  
    GetCart(){
        var self = this;
        $.ajax({
            type: "GET",
            url: "http://localhost:666/carts/getCart",
            success: (cartInfo: any) => {
                self.cart = cartInfo
            }
        })
    }

    cart = {};
  }