import { 
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
declare var $:any;

import { Singleton } from '../../refactoring/DataSingleton';

@Component({
  selector: 'cards', // Asignar un nombre de etiqueta, únio
  templateUrl: './cards.html', // Asignar la ruta del archivo .html que represente esta vista
  styleUrls: ['./cards.css'] // Un arreglo con las rutas de los CSS que queremos en este componente
})

// Debemos asignarle el nombre de nuestro componente
// 
//  Cambiar el nombre de AppComponent por el del nuestro
export class CardsComponent implements OnInit {
  ngOnInit(){
    var self = this;
    this.GetProducts();
    this.GetFilters();

    Singleton.GetInstance().Category = function() {
      self.Category();
  }

    $(".toast").toast();
  }

  GetProducts(){
    Singleton.GetInstance().ShowLoader();
    var self = this;
    $.ajax({
      type: 'GET',
      url: `http://localhost:666/products/search?category=${this.searchFilters.category}&name=${this.searchFilters.name}&price=0,${this.searchFilters.price}&stock=${this.searchFilters.stock ? 'true' : ''}`,
      success: function(res: any) {
        self.products = res;
        Singleton.GetInstance().HideLoader();
      }
    });
  }
  GetFilters(){
    Singleton.GetInstance().ShowLoader();
    var self = this;
    $.ajax({
      type: 'GET',
      url: 'http://localhost:666/products/getFilters',
      success: function(res: any) {
        self.products = res;
        Singleton.GetInstance().HideLoader();
      }
    });
  }
  AddToCart(sku: String) {
    Singleton.GetInstance().ShowLoader();
    var self = this;
    $.ajax({
      type: 'PATCH',
      url: 'http://localhost:666/carts/add',
      xhrFields: {
        withCredentials: true
      },
      data: {
        sku: sku,
        quantity: 1
      },
      success: function(res: any) {
        // console.log('Add to cart: ')
        // console.log(res);
        $('.toast').toast('show');
        Singleton.GetInstance().ReloadCart();
        Singleton.GetInstance().HideLoader();
      }
    })
  }
  products = new Array;
  categories = new Array;
  
  
  searchFilters = {
    name: '',
    price: 25000,
    stock: false,
    category: '',
  }

  UpdateName(element: any) {
    this.searchFilters.name = element.value;
  }

  UpdatePrice(element: any) {
    this.searchFilters.price = element.value;
  }

  Category(){
    var categoria = Singleton.GetInstance().CategoryExport();
    console.log(categoria)
    this.UpdateCategory(categoria);
  }

  UpdateCategory(element: any) {
    this.searchFilters.category = element;
    this.GetProducts();
  }

  UpdateStock(element: any) {
    this.searchFilters.stock = element.checked;
    this.GetProducts();
  }

  CheckKey(event:any) {
    //Si es enter
    if(event.keyCode === 13) {
      this.GetProducts();
    }
  }


}
