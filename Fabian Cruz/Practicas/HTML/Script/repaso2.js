var nombre = 'Fabian Felipe Cruz García';
var fecha = '01/04/1995';

function datos(nombre) {
    console.log(nombre);
    console.log(fecha);
};

datos(nombre);

function Suma(a,b,c){
    var suma = a + b + c;
    console.log(suma);
};

Suma(2,4,5);


var numPares = [2,4,6,8,10,12,14,16];
var numImpares = [1,3,5,7,9,11,13,15]


var persona = {
    nombre: 'Fabian',
    edad: 25,
    fecha: 01/04/1995,
    caminar: function (){
        console.log('caminando');
    },
    datos: function() {
        console.log(this.nombre);
        console.log(this.edad);
    },
    estatura: 194,
    problemaVista: 'Daltonismo'
};

persona.caminar();
persona.datos();

var mayorEdad = persona.edad > 17;
var estaturaMinima = persona.estatura > 164;
var problemaVista = persona.problemaVista !== false;

if (mayorEdad && estaturaMinima && !problemaVista) {
    console.log('Esta persona puede aplicar al servicio militar');
} else {
    console.log('Esta persona no puede aplicar al servicio militard');
}


var pastel = {
    Tipo_de_pan: 'Brownie',
    Color_de_pan: 'Blanco',
    Sabor_de_pan: 'Vainilla',
    Sabor_de_betun: 'Fresa',
    tieneDecoracion: 'Frutas con chocolate',
    Peso: 2,
    Tamaño: 30
};

var favKevin = pastel.Sabor_de_pan === 'Chocolate' && pastel.Tipo_de_pan === 'Tres Leches';
var favAna = pastel.Sabor_de_pan === 'Chocolate' && pastel.Tipo_de_pan === 'Brownie';
var favApaAna = pastel.Sabor_de_betun === 'Zanahoria' && pastel.Tipo_de_pan === 'Integral';
var favArechica = pastel.Sabor_de_pan === 'Fresa' && pastel.Tipo_de_pan === 'Tres Leches';

if (favKevin){
    console.log('Es el favorito de kevin');
} else if (favAna) {
    console.log('Es el favorito de Ana');
} else if (favApaAna) {
    console.log('Es el favorito del Papá de Ana');
} else if (favArechica) {
    console.log('Es el favorito de Luis Arechiga');
} else {
    console.log('No es el favorito de nadie')
};

//Switch

var version = 'v'; //'r','a','b','v'
if (version === 'v') {
    console.log('Esta es una versión nueva');
} else if (version === 'r') {
    console.log('Esta es la versió base que se vende');
} else if (version === 'a') {
    console.log('Esta es la versión experimental');
} else if (version === 'b') {
    console.log('Esta es la versión de pruebas');
}

switch (version) {
    case 'v':
        console.log('Esta es una versión nueva');
    break;
    case 'r':
        console.log('Esta es la versió base que se vende');
    break;
    case 'a':
        console.log('Esta es la versión experimental');
    break;
    case 'b':
        console.log('Esta es la versión de pruebas');
    break;
    default:
        console.log('No conozco esa versión');
    break;
}


// var smartphones = [
//     {
//         marca: 'Apple',
//         frase: 'Se un punto de referencía de calidad'
//     },
//     {
//         marca: 'Samsung',
//         frase: 'Diseñado para ti'
//     },
//     {
//         marca: 'Motorola',
//         frase: 'Hello Moto'
//     },
//     {
//         marca: 'Huawei',
//         frase: 'Calidad y buen precio'
//     },
//     {
//         marca: 'Xiaomi',
//         frase: 'Calidad-Humildad-Precio'
//     }
// ];



// switch (smartphone)
//     case smartphones[0]:
//         console.log(smartphones[0].frase)