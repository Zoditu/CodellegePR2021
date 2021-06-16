/* window.onload=function(event){
    var titulo = document.getElementById("titulo");
    titulo.innerText ="Modificado con JS";
}
 */

/* window.addEventListener("load", function(event){
    var titulo = document.getElementById("titulo");
    titulo.innerText ="Modificado con JS";
});
 */

/* $(function(){
    var titulo = document.getElementById("titulo");
    titulo.innerText ="Modificado con JS";
}); */

/* $(function(){
    $("#titulo").text("Modificado con JQuery");

    $("#otro").append("<h2>Modificado</h2>");

    //$("#otro li").text("Encontrado");

    var ul = $("#otro ul")[0];
    $(ul).find("li").prepend(" *");
}); */

var listaSuperMercado = [{
        nombre: "Platano",
        precio: 25.50,
        peso: "1",
        departamento: "Alimentos",
    },
    {
        nombre: "manzana",
        precio: 18.50,
        peso: "0.5",
        departamento: "Alimentos",
    },
    {
        nombre: "pera",
        precio: 55.25,
        peso: "4",
        departamento: "Alimentos",
    },
    {
        nombre: "Sandia",
        precio: 20,
        peso: "1",
        departamento: "Alimentos",
    },
    {
        nombre: "frijol",
        precio: 10,
        peso: "3",
        departamento: "Alimentos",
    },
    {
        nombre: "Maquillaje",
        precio: 300,
        peso: "0.15",
        departamento: "Belleza",
    },
    {
        nombre: "Protector solar",
        precio: 500,
        peso: "0.5",
        departamento: "Belleza",
    }
]

/* $(function(){
    $("body").append("<ul>Lista de Supermercado</ul>");

for (var i = 0; i < listaSuperMercado.length; i++) {
    const producto = listaSuperMercado[i];
    var ul = $("body ul")[0];
    $(ul).append(`<li class="list-group-item list-group-item-secondary">${producto.nombre} -$${producto.precio} (${producto.peso}kg)</li>`
    );

};
}); */

$(function () {
            $("body").append("<ul>Lista de Supermercado</ul>");

            $.each(listaSuperMercado, function (i, producto) {
                var ul = $("body ul")[0];
                $(ul).append(`<li class="list-group-item list-group-item-secondary">${producto.nombre} -$${producto.precio} (${producto.peso}kg)</li>`);

            });
});