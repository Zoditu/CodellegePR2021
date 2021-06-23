var productos = [
    // {
    //     nombre: 'iPhone 12 Pro Max',
    //     marca: 'Apple',
    //     descripcion: 'The new 2020 iphone 12. This Max',
    //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTee7kZtsyTtQtsNgfTxdRp94RbomfP9GvmxQ&usqp=CAU',
    //     price: 1800.50,
    //     stock: 15
    // },
    // {
    //     nombre: 'Mi 11',
    //     marca: 'Xiaomi',
    //     descripcion: 'The new 2020, Xiaomi 11',
    //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGGlIzZ41rJuZoqD1I9nzA9H0DQCMMGkUPfyD6nERNg1vxKqujkXXsteuIkl43D-WUqBUzgBI&usqp=CAc',
    //     price: 800,
    //     stock: 17
    // },
];



$(function() {

    $.get('http://localhost:666/productos/all', function(response){
        productos = response;

        for (var i = 0; i < productos.length; i++) {
            const producto = productos[i];
            $('body').append(`
            <div class="card mb-3 producto" onclick="MostrarDetalleProducto(${i})">
                <div class="card mb-3 producto">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src='${producto.image}'>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${producto.marca} - ${producto.nombre}</h5>
                                <p class="card-text">Descripción:</p>
                                <p class="card-text">${producto.descripcion}</p>
                                <p class="card-text"><small class="text-muted">Stock: ${producto.stock}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `);
        }
    });

    // var AJAX = new XMLHttpRequest(); //Estado inicial 0

    // AJAX.onreadystatechange = function(){
    //     //State3 : Downloading
    //     if(this.readyState === 4) {
    //         productos = JSON.parse(this.responseText);
    //     }
    //     // State 4 : Finish
    // };

    // for (var i = 0; i < productos.length; i++) {
    //     const producto = productos[i];
    //     $('body').append(`
    //     <div class="card mb-3 producto" onclick="MostrarDetalleProducto(${i})">
    //         <div class="card mb-3 producto">
    //             <div class="row g-0">
    //                 <div class="col-md-4">
    //                     <img src='${producto.image}'>
    //                 </div>
    //                 <div class="col-md-8">
    //                     <div class="card-body">
    //                         <h5 class="card-title">${producto.marca} - ${producto.nombre}</h5>
    //                         <p class="card-text">Descripción:</p>
    //                         <p class="card-text">${producto.descripcion}</p>
    //                         <p class="card-text"><small class="text-muted">Stock: ${producto.stock}</small></p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     `);
    // }

    // AJAX.open('GET', 'http://localhost:666/productos/all') //State: 1
    // AJAX.send(); //State:2
});

function MostrarMensaje() {
    $('body').prepend(`
    <div class="alert alert-warning alert-dismissible fade show custom-alert" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
`)
}

function MostrarDetalleProducto(productoIndex) {

    const producto = productos[productoIndex];

var modal = $('.modal');
    modal.find('h5').text(producto.marca + ' - ' + producto.nombre);
    modal.find('.modal-body p').text(producto.descripcion)

    $('.modal').modal('toggle');
}