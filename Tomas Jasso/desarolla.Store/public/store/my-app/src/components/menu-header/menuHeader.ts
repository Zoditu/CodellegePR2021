import { Component } from "@angular/core";

@Component({
    selector: 'main-menu', //DE AQUI SALE EL NOMBRE DE LA ETIQUETA DEL INDEX.HTML
    templateUrl: './menuHeader.html',
    styleUrls: ['./menuHeader.css']
})

export class HeaderModule{
    accountRedirect = 'Login';
    numberProducts = 0;
}