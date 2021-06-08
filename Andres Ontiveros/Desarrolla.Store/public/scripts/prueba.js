$(function () {
            $.ajax({
                type: "GET",
                url: "/products/all",
                success: function (products) {
                    var body = $(document.body);
                    for (var i = 0; i < products.length; i++) {
                        const producto = products[i];
                        console.log(producto);
                        body.append(`
                <div class="card product-card">
  <h5 class="card-header">${producto.name}</h5>
  <div class="card-body">
    <h5 class="card-title">${producto.description}</h5>
    <p class="card-text">${producto.price}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
                `);
                    }
                    //response.data
                },
                error: function (error) {
                    console.log("error ocurrido");
                }
            });

            $("#nav-title").text("Jquery hizo esto");
            });