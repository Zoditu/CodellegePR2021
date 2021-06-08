//Eventos
//Evento que permite saber cuándo ya se terminó de cargar el contenido
/*
window.onload = function(event) {
    var titulo = document.getElementById('titulo');
    titulo.innerText = 'Modificado con JS';
};

function Revisar(texto, ejecutarAlgo){
    if(texto === 'exec') {
        ejecutarAlgo(); //CallBack
    }
}

Revisar('exec', function(){
    var x = 0;
});

Revisar('exec', function(){
    console.log('dfjflkds');
});
*/

/*window.addEventListener('load', function(event){
    var titulo = document.getElementById('titulo');
    titulo.innerText = 'Modificado con JS';
});*/

//JQuery tiene dos formas de usar:
// - Como objeto con funciones de complemento
// - Como función de apoyo y búsqueda
/**
 * Cuando es función se puede utilizar de dos manera:
 * $('SELECTOR') //Regresar elementos JQueryHTML
 * $(elemento) //Regresar elementos JQueryHTML
 * $(function) //Evento de onload
 */

$(function () {
    $('#titulo').text('Modificado con JQuery');
    /*var titulo = document.getElementById('titulo');
    titulo.innerText = 'Modificado con JQuery';*/

    $('#otro').append('<h2>Modificado :D</h2>')
    /*var otro = document.getElementById('otro');
    otro.innerHTML += '<h2>Modificado :D</h2>';*/

    var ul = $('#otro ul')[0];
    $(ul).find('li').prepend('* ');

    /*var otro = document.getElementById('otro');
    var uls = otro.getElementsByTagName('ul');
    var ul = uls[0];

    var lis = ul.getElementsByTagName('li');
    for (var i = 0; i < lis.length; i++) {
        const li = lis[i];
        li.innerText = 'Encontrado';
    }*/

    // var frases = [{
    //         texto: 'Esta frase debe motivarte porque lo digo yo :D',
    //         lugar: 'desarrolla.Software',
    //         persona: 'El Teacher'
    //     },
    //     {
    //         texto: 'Primero aprendan la teoría :V',
    //         lugar: 'desarrolla.Software',
    //         persona: 'El Teacher'
    //     },
    //     {
    //         texto: 'Asistan al curso PLOX',
    //         lugar: 'desarrolla.Software',
    //         persona: 'El Samuel'
    //     }
    // ];

    // for (var i = 0; i < frases.length; i++) {
    //     const frase = frases[i];

    //     $('body').append(`
    //     <div class="card">
    //         <div class="card-header">
    //             Frases Motivacionales
    //         </div>
    //         <div class="card-body">
    //             <blockquote class="blockquote mb-0">
    //                 <p>${ frase.texto }</p>
    //                 <footer class="blockquote-footer">${ frase.lugar } <cite title="${ frase.persona }">${ frase.persona }</cite>
    //                 </footer>
    //             </blockquote>
    //         </div>
    //     </div>`);
    // }

    /**
     * Tomar la lista del supermercado y generar una lista de bootstrap con JQuery
     */

    var lista = [{
            nombre: "Plátano",
            departamento: "Alimentos",
            precio: 19.40,
            peso: 0.86
        },
        {
            nombre: "Shampoo",
            departamento: "Belleza",
            precio: 74,
            peso: 1
        },
        {
            nombre: "Camarón",
            departamento: "Alimentos",
            precio: 125,
            peso: 0.5
        },
        {
            nombre: "Salchicha",
            departamento: "Alimentos",
            precio: 34.45,
            peso: 0.54
        },
        {
            nombre: "Manzana",
            departamento: "Alimentos",
            precio: 26.00,
            peso: 0.86
        },
        {
            nombre: "Pack Jugos",
            departamento: "Alimentos",
            precio: 80.00,
            peso: 6
        },
        {
            nombre: "Jabón corporal",
            departamento: "Belleza",
            precio: 55.00,
            peso: 0.3
        }
    ];

    /**
    * <ul class="list-group">
        <li class="list-group-item list-group-item-secondary">Manzanas - $20 (0.86 kg)</li>
        <li class="list-group-item list-group-item-secondary">Manzanas - $20 (0.86 kg)</li>
        <li class="list-group-item list-group-item-secondary">Manzanas - $20 (0.86 kg)</li>
        <li class="list-group-item list-group-item-secondary">Manzanas - $20 (0.86 kg)</li>
        <li class="list-group-item list-group-item-secondary">Manzanas - $20 (0.86 kg)</li>
    </ul>
    */

    $('body').append('<ul class="list-group"></ul>');
    $.each(lista, function(i, producto){
        $('.list-group').append(`
            <li class="list-group-item list-group-item-secondary">
                ${producto.nombre} - $${producto.precio} (${producto.peso} kg)
            </li>
        `);
    });
    
    /*for (var i = 0; i < lista.length; i++) {
        const producto = lista[i];

        $('.list-group').append(`
            <li class="list-group-item list-group-item-secondary">
                ${producto.nombre} - $${producto.precio} (${producto.peso} kg)
            </li>
        `);
    }*/

});