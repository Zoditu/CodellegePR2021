import { 
    Component,
    OnInit
  } from '@angular/core';
import { Singleton } from 'src/refactoring/DataSingleton';
import { CartComponent } from '../cart/cart';
  declare var $:any;
  declare var paypal: any;
    
  @Component({
    selector: 'checkout', // Asignar un nombre de etiqueta, únio
    templateUrl: './checkout.html', // Asignar la ruta del archivo .html que represente esta vista
    styleUrls: ['./checkout.css'] // Un arreglo con las rutas de los CSS que queremos en este componente
  })
  
  // Debemos asignarle el nombre de nuestro componente
  // 
  //  Cambiar el nombre de AppComponent por el del nuestro
  export class CheckoutComponent implements OnInit {

    ngOnInit() {
        this.GetUserData();
        var self = this;
        Singleton.GetInstance().UpdateCheckout = function(cart: any) {
          self.cart = cart;
          self.cart.products.push({
            sku: 'Gastos de envío'
            ,name: 'Gastos de envío',
            quantity: 1,                
            unit_price: self.gastosEnvio
        });

        self.cart.total += self.gastosEnvio;
        };

        paypal.Buttons({
          createOrder: function (data: any, actions: any) {
            if(
              self.userData.name === '' || 
              self.userData.lastName === '' ||
              self.userData.email === '' ||
              self.userData.phone === '' ||
              self.userData.address.street === '' ||
              self.userData.address.city === '' ||
              self.userData.address.state === '' ||
              self.userData.address.suburb === '' ||
              self.userData.address.zip === ''
           ) {
             self.validInfo = false;
             document.documentElement.style.setProperty('--required-status', 'var(--error-color)');
             return;
           }
 
           self.validInfo = true;
           document.documentElement.style.setProperty('--required-status', 'var(--color-blue)');

            var articulos = new Array; //[]

            for (var i = 0; i < self.cart.products.length; i++) {
              
              var product = {
                name: '',
                qty: 0,
                unit_price: 0,
                sku: ''
              }
              product = self.cart.products[i];
              articulos.push({
                name: product.name,
                quantity: product.qty,
                unit_amount: {
                  currency_code: "MXN",
                  value: (product.unit_price - product.unit_price * 0.16).toFixed(2)
                },
                tax: {
                  currency_code: "MXN",
                  value: (product.unit_price * 0.16).toFixed(2)
                },
                sku: product.sku
              })
            }

            return actions.order.create({
              purchase_units: [{
                amount: {
                  currency_code: 'MXN',
                  breakdown: {
                    item_total: {
                      currency_code: 'MXN',
                      value: (self.cart.total * 0.84).toFixed(2)
                    },
                    tax_total: {
                      currency_code: 'MXN',
                      value: (self.cart.total * 0.16).toFixed(2)
                    }
                  },
                  value: self.cart.total //Total a pagar
                },
                items: articulos
              }]
            })
          },
          onApprove: function(data: any, actions: any) {
            // This function captures the funds from the transaction.
            return actions.order.capture().then(function(details: any) {
              // This function shows a transaction success message to your buyer.
              Singleton.GetInstance().ShowLoader();
              $.ajax({
                type: 'POST',
                url: 'http://localhost:666/orders',
                xhrFields: { //Esto permite compartir cookies
                  withCredentials: true
                },
                data: {
                  email: self.userData.email,
                  phone: self.userData.phone,
                  address: self.userData.address
                },
                success: function(order: any) {
                  if(order.valid) {
                    window.location.href = '/confirmation?order=' + order.orderID
                  }
                },
                error: function(error: any) {
                  console.log(error)
                }
              })
            });
          }
        }).render('#paypal-payment');
    }

    GetUserData(){
        var self = this;
        Singleton.GetInstance().ShowLoader();
        $.ajax({
          type: "GET",
          xhrFields: {
            withCredentials: true
          },
          url: "http://localhost:666/users/profile",
          success: function(datosUsuario: any) {
            self.userData = datosUsuario;
            if(!self.userData.address) {
              self.userData.address = {
                street: '',
                suburb: '',
                city: '',
                state: '',
                zip: ''
              }

              if(!self.userData.phone) {
                  self.userData.phone = '';
              }

            }
            Singleton.GetInstance().HideLoader();
          }
        })
      }


    // ValidateCart

    userData = {
        nickname: '',
        name: '',
        lastName: '',
        address: {
            street: '',
            suburb: '',
            city: '',
            state: '',
            zip: ''
        },
        email: '',
        password: '',
        phone: ''
    }

    GetCart(cart: any){
      this.cart = cart;
    }

    UpdateValue(event: any, property: String) {
        var value = event.target.value;
        switch (property) {
            case 'email':
                    this.userData.email = value
                break;
                case 'name':
                    this.userData.name = value
                break;
                case 'lastName':
                    this.userData.lastName = value
                break;
                case 'street':
                    this.userData.address.street = value
                break;
                case 'suburb':
                    this.userData.address.suburb = value
                break;
                case 'city':
                    this.userData.address.city = value
                break;
                case 'state':
                    this.userData.address.state = value
                break;
                case 'zip':
                    this.userData.address.zip = value
                break;
                case 'phone':
                    this.userData.phone = value
                break;       
        }
    }

    gastosEnvio = 220;

    cart = {
      quantity: 0,
      total: 0,
      products: new Array
    }

    validInfo = true;
  }  