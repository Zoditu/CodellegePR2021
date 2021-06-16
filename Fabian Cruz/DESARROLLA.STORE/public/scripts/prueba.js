$(function () {
    $.ajax({
        type: 'GET',
        url: '/products/all',
        success: function (products) {
            var body = $(document.body);
            for (let i = 0; i < products.length; i++) {
                const producto = products[i];
                console.log(producto)
                // body.append(`<div>${ producto.name } - ${ producto.descripcion }</div>`)
                body.append(`
                <div class="card product-card">
                    <h5 class="card-header">${ producto.name}</h5>
                    <div class="card-body">
                        <h5 class="card-title">${producto.descripcion}</h5>
                        <p class="card-text">${producto.price}</p>
                        <a href="#" class="btn btn-primary">Add to cart</a>
                    </div>
                </div>
                `)
            }
        },
        error: function (error) {
            console.log('Ah sucedido un error')
        }
    });

    $('#nav-title').text('JQuery hizo esto :D')
});