import { 
    Component,
    OnInit
  } from '@angular/core';
import { func } from 'joi';
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
      Singleton.GetInstance().ReloadCart();
        var self = this;
        Singleton.GetInstance().ShowLoader();
        $.ajax({
            type: "GET",
            xhrFields: {
              withCredentials: true
            },
            url: "http://localhost:666/carts/getCart",
            success: (cartInfo: any) => {
              if(cartInfo.products.length > 0){
                self.products = cartInfo.products;
              } else {
                self.products = null;
              }
                self.total = cartInfo.total;
                Singleton.GetInstance().HideLoader();
            }
        })
    }

    DeleteProduct(sku: any){
      var self = this;
      Singleton.GetInstance().ShowLoader();
        $.ajax({
            type: "PATCH",
            xhrFields: {
              withCredentials: true
            },
            data: {
              sku: sku,
              all: true
            },
            url: "http://localhost:666/carts/remove",
            success: function(response: any) {
              self.GetCart();
            }
        })
    }

    DeleteOne(sku: any){
      Singleton.GetInstance().ShowLoader();
      var self = this;
        $.ajax({
            type: "PATCH",
            xhrFields: {
              withCredentials: true
            },
            data: {
              sku: sku,
              qty: 1
            },
            url: "http://localhost:666/carts/remove",
            success: function(response: any) {
              self.GetCart();
            }
        })
    }

    AddOne(sku: any){
      Singleton.GetInstance().ShowLoader();
      var self = this;
        $.ajax({
            type: "PATCH",
            xhrFields: {
              withCredentials: true
            },
            data: {
              sku: sku,
              quantity: 1
            },
            url: "http://localhost:666/carts/add",
            success: function(response: any) {
              self.GetCart();
            }
        })
    }

    CleanCart() {
      Singleton.GetInstance().ShowLoader();
      var self = this;
      $.ajax({
        type: "PATCH",
        xhrFields: {
          withCredentials: true
        },
        url: 'http://localhost:666/carts/cleanCart',
        success: function(cartInfo: any) {
          self.GetCart();
        }
      })
    }

    total = 0;
    products = null;

  }