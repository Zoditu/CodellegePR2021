// Eventos
// Los eventos permiten saber cuándo ya se terminó de cargar el contenido

// Forma nativa de añadir un evento al load
// window.onload = function(event) {
//     var titulo = document.getElementById('titulo');
//     titulo.innerText = 'Modificado con Js'
// };

// Forma correcta de añadir un evento al load
// window.addEventListener('load', function(event){
//     var titulo = document.getElementById('titulo');
//     titulo.innerText = 'Modificado con Js';
// });

// // JQuery tiene dos formas de usarse:
// $(function(){

//     $('#titulo').text(' Modificado con JQuery')
//     // var titulo = document.getElementById('titulo');
//     // titulo.innerText = 'Modificado con Jquer';

//     $('#otro').append('<h2>Div Modificado</h2>')
//     // var otro = document.getElementById('otro');
//     // onpointerover.innerText = 'Modificado con Jquer';

//     // $('#otro li').text('Encontrado');

//     // var otro = document.getElementById('otro');
//     // var uls = otro.getElementsByTagName('ul');
//     // var ul = uls[0];

//     // var lis = ul.getElementsByTagName('li');
//     // for (var i = 0; i < lis.length; i++) {
//     //     const li = lis[i];
//     //     li.innerText = 'Encontrado';
//     // }

//     var ul = $('#otro ul')[0];
//     $(ul).find('li').prepend('* ');

//     var frases = [{
//         texto: 'Esta frae debe motivarte porque lo digo yo :D',
//         lugar: 'desarrolla.software',
//         persona: 'Fabian Cruz'
//     },
//     {
//         texto: 'Asistan al curso',
//         lugar: 'desarrolla.software',
//         persona: ' Samuel'
//     }
// ];

// for (var i = 0; i < frases.length; i++) {
//     const frase = frases[i];
//     $ `
//         <div class="card">
//             <div class="card-header">
//             Frases Motivacionales
//             </div>
//             <div class="card-body">
//                 <blockquote class="blockquote mb-0">
//                     <p>${frase.texto}</p>
//                     <footer class="blockquote-footer">${frase.lugar}<cite title="Source Title">${frase.persona} </cite></footer>
//                 </blockquote>
//             </div>
//         </div>
//     `;
// }
// });

// Tomar lista del supermercado y generar una lista de bootsrap con jquery

var list = [{
        nombre: 'Platano',
        departamento: 'Alimentos',
        precio: 20.30,
        cantidad: 1,
    },
    {
        nombre: 'Manzana',
        departamento: 'Alimentos',
        precio: 32.50,
        cantidad: 1,
    },
    {
        nombre: 'Papaya',
        departamento: 'Alimentos',
        precio: 51.89,
        cantidad: 2.75,
    },
    {
        nombre: 'Leche',
        departamento: 'Abarrotes',
        precio: 120,
        cantidad: 6,
    },
    {
        nombre: 'Jabón',
        departamento: 'Limpieza',
        precio: 130,
        cantidad: 1.75,
    },
    {
        nombre: 'Shampoo',
        departamento: 'Limpieza',
        precio: 65.80,
        cantidad: .98,
    }
]

$(function () {
    $('.list-group').prepend('<h2>Lista de productos</h2>');
    $('body').html('<ul class="list-group"></ul> ');
    $.each(list, function(i, producto){
        $('.list-group').append(`
            <li class="list-group-item list-group-item-secondary">
                ${producto.nombre} - $${producto.precio} (${producto.peso} kg)
            </li>
        `);
    })


    // for (var i = 0; i < list.length; i++) {
    //     const producto = list[i];
    //     $('.list-group').append(`
    //         <li class="list-group-item list-group-item-secondary">
    //             ${prodcuto.nombre} - $${producto.precio} (${producto.peso} kg)
    //         </li>
    //     `);
    // };
});

{
    /* <ul class="list-group">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
    </ul>  */
}