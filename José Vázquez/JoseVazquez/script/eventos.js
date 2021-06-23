<<<<<<< HEAD
<<<<<<< Updated upstream
var productos = [];


$(function () {

  $.get('http://localhost:666/products/all', function (response) {
    productos = response;
    for (var i = 0; i < productos.length; i++) {
      const producto = productos[i];
      $('body').append(
        `<div class="card mb-3 producto" onclick="MostrarDetalleProducto(${i})">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${producto.image}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${producto.brand} - ${producto.name}</h5>
            <p class="card-text">${producto.description}</p>
            <p class="card-text">
            <small class="text-muted">In stock: ${producto.stock} units</small>
            </p>
          </div>
        </div>
      </div>
    </div>`);
    }
  });
});



//     var AJAX = new XMLHttpRequest(); //Estado 000
//     AJAX.onreadystatechange = function(){
//         //Estado 333 Donwloading
//         if(this.readyState === 4){
//             productos = JSON.parse(this.responseText);
//             for (var i = 0; i < productos.length; i++) {
//                 const producto = productos[i];
//                 $('body').append(`
//                 <div class="card mb-3 producto" onclick="MostrarDetalleProducto(${i})">
//                 <div class="row g-0">
//                   <div class="col-md-4">
//                     <img src="${producto.image}">
//                   </div>
//                   <div class="col-md-8">
//                     <div class="card-body">
//                       <h5 class="card-title">${producto.brand} - ${producto.name}</h5>
//                       <p class="card-text">${producto.description}</p>
//                       <p class="card-text">
//                       <small class="text-muted">In stock: ${producto.stock} units</small>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>`);
//             }
//         }
//         //Estado 444 Finish
//     };
//     AJAX.open( 'GET', 'http://localhost:666/products/all'); //Estado 111
//     AJAX.send(); //Estado 222
// });

function MostrarDetalleProducto(productIndex) {
  const producto = productos[productIndex];
  var modal = $('.modal');
  modal.find('h5').text(producto.brand + " - " + producto.name);
  modal.find('.modal-body p').text(producto.description);
  $('.modal').modal('toggle');
=======
var productos=[];


$(function(){
    
    var AJAX = new XMLHttpRequest(); //Estado 000
    AJAX.onreadystatechange = function(){
        //Estado 333 Donwloading
        if(this.readyState === 4){
            productos = JSON.parse(this.responseText);
            for (var i = 0; i < productos.length; i++) {
                const producto = productos[i];
                $('body').append(`
                <div class="card mb-3 producto" onclick="MostrarDetalleProducto(${i})">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${producto.image}">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${producto.brand} - ${producto.name}</h5>
                      <p class="card-text">${producto.description}</p>
                      <p class="card-text">
                      <small class="text-muted">In stock: ${producto.stock} units</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>`);
            }
        }
        //Estado 444 Finish
    };
    AJAX.open( 'GET', 'http://localhost:666/products/all'); //Estado 111
    AJAX.send(); //Estado 222
});

function MostrarDetalleProducto(productIndex){
    const producto = productos[productIndex];  
    var modal = $('.modal');
    modal.find('h5').text(producto.brand + " - " + producto.name);
    modal.find('.modal-body p').text(producto.description);
    $('.modal').modal('toggle');
>>>>>>> main
}

// function MostrarMensaje(){
//     $('body').prepend(
//         `<div class="alert alert-warning alert-dismissible fade show custom-alert" role="alert">
//   <strong>Holy guacamole!</strong> You should check in on some of those fields below.
//   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
// </div>`);
// }
<<<<<<< HEAD
=======
var productos=[{
    name: "iPhone 12 Pro Max",
    brand: "Apple",
    description: "Apple iphone 12 Max Pro",
    image: "image",
    price: 1800.50

}
];
$
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
function MostrarMensaje(){ 
    $('body').prepend(
        `<div class="alert alert-warning alert-dismissible fade show custom-alert" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`);
}

function MostrarDetalleProducto(){
    var modal=$('.modal');
    modal.find('h5').text('Apple iphone 12 Max Pro')
    modal.find('.modal-body p').text('Apple iphone 12 Max Pro')
    $('.modal').modal('.toggle');
}
>>>>>>> Stashed changes
=======

>>>>>>> main
