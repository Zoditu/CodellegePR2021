import { newArray } from '@angular/compiler/src/util';
import { 
    Component,
  } from '@angular/core';
  declare var $:any;

  @Component({
    selector: 'examen', // Asignar un nombre de etiqueta, únio
    templateUrl: './examen.html', // Asignar la ruta del archivo .html que represente esta vista
    styleUrls: ['./examen.css'] // Un arreglo con las rutas de los CSS que queremos en este componente
  })
  
  // Debemos asignarle el nombre de nuestro componente
  // 
  //  Cambiar el nombre de AppComponent por el del nuestro
  export class ExamenComponent {

    examen = {
        calificacion: "",
        nombreAlumno: "",
        preguntas: newArray
    }

    
    
   
  }  