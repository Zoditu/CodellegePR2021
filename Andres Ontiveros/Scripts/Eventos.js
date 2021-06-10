/* var productos =[
    {
        name:"Iphone 12 Pro Max",
        brand:"Apple",
        description:"Nueva version con tres camaras incluidas para una mejor calidad de imagen",
        image:"https://http2.mlstatic.com/D_NQ_NP_990601-MLM45172516806_032021-O.webp",
        price: 1800.50,
        stock:20,
    },
    {
        name:"Mi 11",
        brand:"Xiomi",
        description:"Nuevo diseño",
        image:"https://http2.mlstatic.com/D_NQ_NP_633757-MLA40644382699_022020-O.jpg",
        price: 800,
        stock:16,
    }
];

$(function(){
    for (var i = 0; i < productos.length; i++) {
        const producto = productos[i];

        $("body").append(
        `
        <div class="card mb-3 producto"onclick="MostrarDetallesProducto(${i})">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${producto.image}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${producto.name}</h5>
              <p class="card-text">${producto.description}</p>
              <p class="card-text"><small class="text-muted">In stock: ${producto.stock}</small></p>
            </div>
          </div>
        </div>
      </div>
        `);
    }
});
function MostrarDetallesProducto(productIndex){
    const producto =productos[productIndex];
    var modal = $(".modal");
    modal.find("h5").text(producto.brand +" - "+producto.name);
    modal.find(".modal-body p").text(producto.description);
    $(".modal").modal("toggle"); */
//}

/* function MostrarMensaje(){
$("body").prepend(
    `
    <div class="alert alert-warning alert-dismissible fade show custom-alert" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    `
)
} */

/* function MostrarDetallesProducto(){
    var modal=$(".modal");
    modal.find("h5").text("Apple iphone 12 Max Pro");
    modal.find(".modal-body p").text("Nueva version con tres camaras incluidas para una mejor calidad de imagen");
    $(".modal").modal("toggle")
}
 */

/* var productos = [];

$(function () {

    //Asynchronous Javascript And XML
    var AJAX = new XMLHttpRequest(); //Estado inicial 0
    AJAX.onreadystatechange = function () {
        //State 3: Downloading
        if (this.readyState === 4) {
            if (this.status === 200) {
                productos = JSON.parse(this.responseText);
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
                                    <h5 class="card-title"> ${producto.brand} - ${producto.name}</h5>
                                    <p class="card-text">${producto.description}</p>
                                    <p class="card-text">
                                        <small class="text-muted">In Stock: ${producto.stock} units</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                     </div>`);
                }
            }
        }
        //State 4: Finish
    };
    AJAX.open('GET', 'http://localhost:666/products/all'); //State: 1
    AJAX.send(); //State: 2
});

function MostrarDetalleProducto(productIndex) {

    const producto = productos[productIndex];

    var modal = $('.modal');
    modal.find('h5').text(producto.brand + " - " + producto.name);
    modal.find('.modal-body p').text(producto.description);

    $('.modal').modal('toggle');
}  */

var productos = [];

$(function () {

    $.get("http://localhost:666/products/all", function (response) {
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
                                    <h5 class="card-title"> ${producto.brand} - ${producto.name}</h5>
                                    <p class="card-text">${producto.description}</p>
                                    <p class="card-text">
                                        <small class="text-muted">In Stock: ${producto.stock} units</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                     </div>`);
    }
});
})