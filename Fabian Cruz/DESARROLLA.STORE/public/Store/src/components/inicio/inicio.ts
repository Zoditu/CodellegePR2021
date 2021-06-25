import { 
    Component,
    OnInit
  } from '@angular/core';
  declare var $:any;

  import { Singleton } from '../../refactoring/DataSingleton';

  @Component({
    selector: 'inicio', // Asignar un nombre de etiqueta, únio
    templateUrl: './inicio.html', // Asignar la ruta del archivo .html que represente esta vista
    styleUrls: ['./inicio.css'] // Un arreglo con las rutas de los CSS que queremos en este componente
  })
  
  // Debemos asignarle el nombre de nuestro componente
  // 
  //  Cambiar el nombre de AppComponent por el del nuestro
  export class InicioComponent implements OnInit {

    ngOnInit() {
      Singleton.GetInstance().CategoryExport = function() {
        this.CategoryExport();
      }
    }
    
    CategoryInicio(element: any) {
      var self = this;
      self.categoria = element;
    }
    

    categoria = '';
    categoria2 = '';
  }  