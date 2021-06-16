import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'APP';
  name = "Andres";
  CambiarTitulo(){
    this.title = "Angular cambia solo"
  }
}
