// Hacer una lista de cumpleañeros
var cumpleañeros = [{
        nombre: 'Kevin Martin del Campo',
        fecha: '14/04/1995',
        imagern: 'images/kevin.jpg',
        regalos: 'Me gustaría un pastel de chocolate',
        mostrarDetalles: function () {
            console.log('Nombre: ' + this.nombre);
            console.log('Cumple el: ' + this.fecha);
            console.log('Le gustaría de regalo: ' + this.regalos);
        }
    },
    {
        nombre: 'Fabian Felipe Cruz García',
        fecha: '01/04/1995',
        imagern: 'images/Fabian.jpg',
        regalos: 'Me gustaría un juego de mesa',
        mostrarDetalles: function () {
            console.log('Nombre: ' + this.nombre);
            console.log('Cumple el: ' + this.fecha);
            console.log('Le gustaría de regalo: ' + this.regalos);
        }
    },
    {
        nombre: 'Yesenia Elizabeth Cortes Muñoz',
        fecha: '25/05/1995',
        imagern: 'images/Eliza.jpg',
        regalos: 'Me gustaría un par de mancuernas',
        mostrarDetalles: function () {
            console.log('Nombre: ' + this.nombre);
            console.log('Cumple el: ' + this.fecha);
            console.log('Le gustaría de regalo: ' + this.regalos);
        }
    },
    {
        nombre: 'Owen Michel Cruz Cortes',
        fecha: '02/03/2013',
        imagern: 'images/Owen.jpg',
        regalos: 'Me gustaría un juguete de las tortugas ninja',
        mostrarDetalles: function () {
            console.log('Nombre: ' + this.nombre);
            console.log('Cumple el: ' + this.fecha);
            console.log('Le gustaría de regalo: ' + this.regalos);
        }
    },
];

cumpleañeros[1].mostrarDetalles();

// ===========================================================================
// Sentencias condicionales

var edad = 19;
var esMayor = edad > 18

var tipoEdad = esMayor ? 'Mayor de edad' : 'Menor de edad';
console.log(tipoEdad);

if (esMayor) {
    console.log('Mayor de edad');
} else if (edad === 18) {
    console.log('Recién mayor de edad');
} else {
    console.log('Menor de edad');
}


// ================================================================
// Un ciclo for es mas utilizado para contar
// Del 0 al ultimo
for (var i = 0; i < cumpleañeros.length; i++) {
    console.log(cumpleañeros[i].mostrarDetalles());
}

// Del ultimo al 0
for (var i = (cumpleañeros.length - 1); i >= 0; i--) {
    console.log(cumpleañeros[i].mostrarDetalles());
}

// ===============================================================
// While
// El ciclo while es para repetir indefinidamente hasya que se cumpla algo
console.log('-------------------WHILE---------------------------')
var contador = 1;

while (contador < 10) {
    console.log('Ciclo while: ' + contador);
    contador++;
}

// =============================================
console.log('------------DO WHILE---------------------------------')
contador = 1;
do {
    // if (contador >= 10) {
    //     break;
    // }
    console.log('Do while: ' + contador);
    contador++;
} while (contador < 10);

console.log('Fin')


function MostrarError(codigo = 0) {
    //     if (codigo === 0) {
    //         console.log('Ha ocurrido un error en la aplicación. Codigo de error: ' + codigo);
    //     } else if(codigo === 2) {
    //         console.log('No se pudo cargar la información. Codigo de error: ' + codigo);
    //     } else if (codigo === 7) {
    //         console.log('Se perdio la conexion al servidor. Codigo de error: ' + codigo);
    //     } else if (codigo === 14) {
    //         console.log('No se pudo guardar la información temporal. Codigo de error: ' + codigo);
    //     } else {
    //         console.log('No se reconoce este código de error: ' + codigo);
    //     }
    // }

    switch (codigo) {
        case 0:
            console.log('Ha ocurrido un error en la aplicación. Codigo de error: ' + codigo);
            break;
        case 2:
            console.log('No se pudo cargar la información. Codigo de error: ' + codigo);
            break;
        case 7:
            console.log('Se perdio la conexion al servidor. Codigo de error: ' + codigo);
            break;
        case 7:
            console.log('No se pudo guardar la información temporal. Codigo de error: ' + codigo);
            break;
        default:
            console.log('No se reconoce este código de error: ' + codigo);
            break;
    }
}

MostrarError(0);