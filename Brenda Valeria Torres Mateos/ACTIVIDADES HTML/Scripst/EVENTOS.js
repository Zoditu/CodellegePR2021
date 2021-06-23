/*var productos = [
    {
        name: "iPhone 12 Pro Max",
        brand: "Apple",
        description: "The new 2020 iPhone 12, This Max Pro version has a better camera",
        image:"https://m.media-amazon.com/images/I/71LbB2+EOZL._AC_SX522_.jpg",
        price:1800.50,
        stock: 15
    },

    {
        name: "Mi 11",
        brand: "Xiaomi",
        description: "The new 2021 Xiaomi Mi 11",
        image:"https://img.gkbcdn.com/s3/p/2020-12-30/Xiaomi-Mi-11-5G-Smartphone-6-81-Inch-8GB-256GB-White-427118-0.jpg",
        price:800,
        stock: 17

    },

    {
        name: "iPhone 12 Pro Max",
        brand: "Apple",
        description: "The new 2020 iPhone 12, This Max Pro version has a better camera",
        image:"https://m.media-amazon.com/images/I/71LbB2+EOZL._AC_SX522_.jpg",
        price:1800.50,
        stock: 15
    },

    {
        name: "Mi 11",
        brand: "Xiaomi",
        description: "The new 2021 Xiaomi Mi 11",
        image:"https://img.gkbcdn.com/s3/p/2020-12-30/Xiaomi-Mi-11-5G-Smartphone-6-81-Inch-8GB-256GB-White-427118-0.jpg",
        price:800,
        stock: 17

    }
];
*/
var productos = [];


$(function(){

  $.get("http://localhost:666/products/all", function(response) {
   
  productos = response;
    for (var i = 0; i < productos.length; i++) {
      const producto = productos[i];
      $("body").append(`
      <div class="card mb-3 producto" onclick="MostrarDetallesProducto(${i})">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${producto.image}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${producto.brand} - ${producto.name}</h5>
            <p class="card-text">${producto.description} </p>
            <p class="card-text"><small class="text-muted">In Stock: ${producto.stock} units</small></p>
          </div>
        </div>
      </div>
    </div>`
      );
    
  }
  });

  
});




function MostrarDetallesProducto(productIndex){
    const producto = productos[productIndex];

    var modal = $(".modal");
    modal.find("h5").text(producto.brand + " - " + producto.name);
    modal.find(".modal-body p").text(producto.description);
   
   
    $(".modal").modal("toggle");
}

/*
  var AJAX = new XMLHttpRequest(); //Estado Inicial 0
  AJAX.onreadystatechange = function(){
    //State 3 Downloading
    if(this.readyState === 4){
      if(this.status === 200){
       

      }
      

    }
    //State 4 finish

  };
  AJAX.open("GET", "http://localhost:666/products/all"); //State 1
  AJAX.send(); //State 2

 */

/*
function MostrarMensaje(){
  $("body").prepend(
  `
  <div class="alert alert-warning alert-dismissible fade show custom-alert" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`
);
} 
*/
