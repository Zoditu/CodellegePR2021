import { 
  Component,
  OnInit
 } from '@angular/core';
declare var $:any;
import { CardsComponent } from '../../components/cards/cards'
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

    this.CheckSession();
  } 
  

  ReloadCart(){
    Singleton.GetInstance().ShowLoader();
    var self = this
    $.ajax({
      type: 'GET',
      xhrFields: {
        withCredentials: true
      },
      url: 'http://localhost:666/carts/getCart',
      success: function(cartInfo: any){
        if(Singleton.GetInstance().UpdateCheckout) {
          var copia = Object.assign({}, cartInfo);
          Singleton.GetInstance().UpdateCheckout(copia);
        }
        self.numberProducts = cartInfo.quantity;
        Singleton.GetInstance().HideLoader();
      }
    })

  }

  CheckSession(){
    var self = this;
    $.ajax({
      type: "GET",
      xhrFields: {
        withCredentials: true
      },
      url: "http://localhost:666/users/getSession",
      success: function(result: any) {
        if(result.session === true) {
          self.accountRedirect = "Mi Cuenta";
          if(window.location.pathname === '/register' || window.location.pathname === '/loging') {
            window.location.href = '/';
          }
        }
      },
      error: function() {
        self.accountRedirect = "Login";
      }
    });
  }

  accountRedirect = 'Login';
  numberProducts = 0;
  catalogo=false;
}
