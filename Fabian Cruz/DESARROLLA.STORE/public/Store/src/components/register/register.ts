import { 
    Component,
  } from '@angular/core';
  declare var $:any;
    
  @Component({
    selector: 'register', // Asignar un nombre de etiqueta, únio
    templateUrl: './register.html', // Asignar la ruta del archivo .html que represente esta vista
    styleUrls: ['./register.css'] // Un arreglo con las rutas de los CSS que queremos en este componente
  })
  
  // Debemos asignarle el nombre de nuestro componente
  // 
  //  Cambiar el nombre de AppComponent por el del nuestro
  export class RegisterComponent {
    Register(){
      var self = this;
      $.ajax({
        type: "POST",
        xhrFields: {
          withCredentials: true
        },
        url: 'http://localhost:666/users/register',
        data: {
            nickname: this.nickname,
            name: this.name,
            lastName: this.lastName,
            address: {
                street: this.address.street,
                suburb: this.address.suburb,
                city: this.address.city,
                state: this.address.state,
                zip: this.address.zip
            },
            email: this.email,
            password: this.password,
            phone: this.phone,
        },

        success: (res: any) => {
          self.invalidRegister = false;
          window.location.href="/";
        },
        error: (error: any) => {
          self.invalidRegister= true;
          self.registerFailure = error.responseJSON.error;
        }
      });
    }

    UpdateValue(event: any, property: String) {
        var value = event.target.value;
        switch (property) {
            case 'email':
                    this.email = value
                break;
                case 'password':
                    this.password = value
                break;
                case 'nickname':
                    this.nickname = value
                break;
                case 'name':
                    this.name = value
                break;
                case 'lastName':
                    this.lastName = value
                break;
                case 'street':
                    this.address.street = value
                break;
                case 'suburb':
                    this.address.suburb = value
                break;
                case 'city':
                    this.address.city = value
                break;
                case 'state':
                    this.address.state = value
                break;
                case 'zip':
                    this.address.zip = value
                break;
                case 'phone':
                    this.phone = value
                break;       
        
            default:
                break;
        }
    }

    nickname = '';
    email ='';
    password='';
    name = '';
    lastName = '';
    address = {
    street: '',
    suburb: '',
    city: '',
    state: '',
    zip: ''
    }
    phone = '';


    invalidRegister=false
    registerFailure= ''
  }  




