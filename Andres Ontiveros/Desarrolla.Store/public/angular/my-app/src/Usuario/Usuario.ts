import { Component } from '@angular/core';

@Component({
  selector: 'Usuario', //Asignar un nombre de etiqueta único
  templateUrl: './Usuario.html', //Asignar la ruta del archivo html que represente esta vista
  styleUrls: ['./Usuario.css'] //Un arreglo con las rutas de los arreglos que queremos en este componente
})
export class UsuarioComponent { //Cambiar el nombre de APPComponent por el del nuestro
 
Username = "Andres717";
Name = "Andres";
lastName = "Ontiveros Chairez";
MemberSince = "01/01/2021"
}
