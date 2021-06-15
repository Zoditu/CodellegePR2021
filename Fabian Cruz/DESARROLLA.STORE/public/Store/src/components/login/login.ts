import { 
    Component,
  } from '@angular/core';
import { Singleton } from 'src/refactoring/DataSingleton';
  declare var $:any;
    
  @Component({
    selector: 'login', // Asignar un nombre de etiqueta, únio
    templateUrl: './login.html', // Asignar la ruta del archivo .html que represente esta vista
    styleUrls: ['./login.css'] // Un arreglo con las rutas de los CSS que queremos en este componente
  })
  
  // Debemos asignarle el nombre de nuestro componente
  // 
  //  Cambiar el nombre de AppComponent por el del nuestro
  export class LoginComponent {
    Login(){
      var self = this;
      Singleton.GetInstance().ShowLoader();
      $.ajax({
        type: "POST",
        xhrFields: {
          withCredentials: true
        },
        url: 'http://localhost:666/users/login',
        data: {
          email: this.email,
          nickname: this.email,
          password: this.password
        },

        success: (res: any) => {
          self.invalidLogin = false;
          window.location.href="/";
        },
        error: (error: any) => {
          Singleton.GetInstance().HideLoader();
          self.invalidLogin = true;
        }
      });
    }
    UpdateEmail(event: any){
      this.email = event.target.value;
    }
    UpdatePassword(event:any){
      this.password = event.target.value;
    }
    email ='';
    password='';
    invalidLogin=false
  }  