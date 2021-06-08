import {
  Component
} from '@angular/core';
import { Singleton } from '../../refactoring/DataSingleton';
declare var $: any;

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
Login() {
  var self = this;
  Singleton.GetInstance().ShowLoader();
  $.ajax({
    type: "POST",
    xhrFields: {
      withCredentials: true
    },
    url: "http://localhost:666/users/login",
    data: {
      email: this.email,
      nickname: this.email,
      password: this.password
    },
    success: function (res: any){
      Singleton.GetInstance().HideLoader();
      self.invalidLogin = false;
      window.location.href="/";
    },
    error: function (error: any) {
      Singleton.GetInstance().HideLoader();
      self.invalidLogin = true;
    }
  });
}

UpdateValue(event: any, property: String) {
  //email
  var value = event.target.value;
  switch(property){
    case "email":
      this.email = value;
      break;
    case "password":
      this.password = value;
      break;
  }
}


email = '';
password = '';
invalidLogin = false;

}