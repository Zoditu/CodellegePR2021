import { 
    Component,
    OnInit
  } from '@angular/core';
import { Singleton } from 'src/refactoring/DataSingleton';
declare var $: any;
    
  @Component({
    selector: 'confirmation', // Asignar un nombre de etiqueta, únio
    templateUrl: './confirmation.html', // Asignar la ruta del archivo .html que represente esta vista
    styleUrls: ['./confirmation.css'] // Un arreglo con las rutas de los CSS que queremos en este componente
  })
  
  // Debemos asignarle el nombre de nuestro componente
  // 
  //  Cambiar el nombre de AppComponent por el del nuestro
  export class ConfirmationComponent implements OnInit {

    ngOnInit(){
      Singleton.GetInstance().ShowLoader();
      var query = window.location.search;
      var result: any;
      var self = this;
      result = query.match(/[Oo][Rr][Dd][Ee][Rr]=\w+/);
      if (result.length === 1) {
        result = result[0].split('=');
        var numPedido = result[1];
        $.ajax({
          type: 'GET',
          url: "http://localhost:666/orders/validate/" + numPedido,
          success: function (res: any) {
            if (res.valid === true) {
              self.numeroPedido = numPedido;
            }
            Singleton.GetInstance().HideLoader();
          }
        });
      }
    }

      numeroPedido = null;
  }  