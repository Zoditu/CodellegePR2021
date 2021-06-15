import { 
    Component,
    OnInit
  } from '@angular/core';
import { Singleton } from 'src/refactoring/DataSingleton';
    
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
        this.GetPedido();
    }

    GetPedido(){
        // Llamada al endpoint del pedido con LastOrder de una cookie
        this.numPedido = null
        if (this.numPedido === null) {
            window.location.href = '/';
        } 
    }

      numPedido = null;
  }  