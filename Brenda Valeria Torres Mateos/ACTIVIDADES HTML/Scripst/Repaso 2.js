console.log("Hola");

/*
Tipos de datos:
*Primitivos:
  -boolean: true | false
  -number: int |dec
  -string: "texto" | 'texto'
*Complejos:
  -Array: [a, b, c, d]
  -Objetos {key: value}
*function

Variables:
*  Es una referencia o identificador de un valor.
Ejemplo: var NOMBRE - Declarar variable
        -NOMBRE debe cumplir con las siguientes reglas:
        1)No debe iniciar con numeros ni carcteres especiales, a excepción del $
        2)No debe haber caracteres especiales en su nombre (variables)
        3)Pueden contener el _ (_variable, variable_, variable_algo)
        4)En los alcances de sentencias que no son operaciones (if, else, for, while) no deben repetirse los nombres dentro de un alcance
*/

//Declaración de variable inicializada
var edad = 25;

//Reasignación de variable
edad = true;

var nombre = "Brenda Valeria";
console.log(nombre);

var apellidos = "Torres Mateos";
console.log(apellidos);

var fecha_nacimiento = new Date(1999, 0, 13, 0, 0, 0, 0);
console.log(fecha_nacimiento);

var edad = 22;
console.log(edad);

var sexo = "Femenino";
console.log(sexo);

/*
Funciones
* Son rutinas, una serie de pasos para lograr algo
* function NOMBRE (parametros) {//scope}
* scope es el alcance de una funcion. Se le llama local y es temporal
* Los parametros se consideran como variables temporales dentro del alcance de la funcion
*/

function MostrarDatos (nombre, fecha) { 
    console.log(nombre);
    console.log(fecha);
}

MostrarDatos("Brenda Valeria", new Date (1999, 0, 13));

//Las funciones pueden retornar un valor, o sea, esperamos un resultado.

function Suma (a, b, c) {
    return a + b + c;
}
var resultado = Suma(2, 2, 3);
console.log (resultado);

/*
Tipos de datos complejos:
 Array: Listas indexadas, comenzando desde el 0
 var lista: [];
 var lista = new Array();
*/

var numerosPares = [2, 4, 6, 8, 10, 12, 14, 16];
numerosPares.push(18);
console.log(numerosPares [1]);
console.log(numerosPares);

/*
Objetos: representaciones de algo
Un objeto es la abstraccion de algo en codigo
var objeto = { key: value};
*/

var persona = {
    nombre: "Otra persona",
    edad: 123,
    caminar: function(){
        console.log("Caminando");
    },
    mostrarInfo: function(){
        console.log(this.nombre);
        console.log(this.edad);
    }
};

persona.nomre = "Nueva Persona";
persona.caminar();
persona.mostrarInfo();

//Tipos de operadores condicioneales
var condición = 5 > 10;
condición = 10 === 11;
condición = 10 === "10";
condición = 10 === "10";
condición = 15 != 10;
condición = 15 != "15";
condición = 15 !== "15";

console.log("Condición: " + condición);

//Sentencias Selectivas
//if-else
//switch
var persona = {
    edad: 26,
    estatura: 171,
    problemaVista: 'Miopía'
};

var mayorEdad = persona.edad > 17;
var estaturaMinima = persona.estatura > 164;
var tieneProblemasDeVision = persona.problemaVista !== false;

if( mayorEdad && estaturaMinima && !tieneProblemasDeVision ) {
    console.log('Esta persona puede aplicar al servicio militar');
} else {
    console.log('Esta persona será un civil para siempre');
}

/* Crear un objeto que represente un pastel, describiendo las propiedades para:
 *  - Tipo de pan (Consistencia)
 *  - Color de pan
 *  - Sabor de pan
 *  - Sabor de betún
 *  - tieneDecoración: 'Frutas con chocolate'
 *  - Peso
 *  - Tamaño
 */
// Hacer una selección de pasteles:
// Si el pastel es de chocolate y tres leches, imprimir "Es el favorito de Kevin"
// Si es chocolate, de brownie, imprimir "Es el favorito de AnaLucía"
// Si es de pan integral, con betún de zanahoria, imprimir "Es el favorito del apá de AnaLucía"
// Si es de fresa y tres leches, imprimir "Es el favorito de Arechiga"

var pastel = {
    tipoPan: "Brownie",
    colorPan: "Café",
    saborPan: "Chocolate",
    saborBetun: "Chocolate",
    peso: 1600,
    Tamaño: "Familiar",
    tipoDecoracion: 'Chispas'
};

if(pastel.saborPan === 'Chocolate' && pastel.saborBetun === 'Chocolate' && pastel.tipoPan === 'Tres Leches') {
    console.log('Es el favorito de Kevin');
} else if( pastel.tipoPan === 'Brownie' && pastel.saborBetun === 'Chocolate') {
    console.log('Es el favorito de AnaLucía');
} else if ( pastel.tipoPan === 'Integral' && pastel.saborPan === 'Zanahoria' && pastel.saborBetun === 'Queso' ) {
    console.log('Es el favorito del papá de AnaLucía');
} else if( pastel.tipoPan === 'Tres Leches' && pastel.saborBetun === 'Vainilla' && pastel.tipoDecoracion === 'Fresas' ){
    console.log('Es el favorito de Arechiga');
}

/*
//typeof te regresa el tipo de dato inferido de una variable o propiedad
//Si tienes: var x = 1;
//Entonces typeof x te va a regresar "number"
//Si es un valor no definido o propiedad que no existe, regresa "undefined"
console.log(typeof pastel.tipoDecoracion);

//Para saber si algo existe y tiene valor, se pone:
//typeof VARIABLE !== "undefined"
//if( typeof pastel.tipoDecoracion !== "undefined" ){
if( pastel.hasOwnProperty('tipoDecoracion') ){
    console.log('Este pastel tiene la propiedad decoración con el valor: ' + pastel.tipoDecoracion);
} else {
    console.log('Este pastel o no tiene la propiedad tipoDecoración o es false');
}
*/

//Switch
var version = 'v'; //'r', 'a', 'b', 'v'
if(version === 'v') {
    console.log('Esta es una versión nueva');
} else if( version === 'r') {
    console.log('Esta es la versión base que se vende');
} else if( version === 'a') {
    console.log('Esta es la versión experimental');
} else if( version === 'b') {
    console.log('Esta es la versión de pruebas');
} else {
    console.log('No conozco esa versión');
}

switch(version) {
    case "v":
        console.log('Esta es una versión nueva');
    break;

    case "r":
        console.log('Esta es la versión base que se vende');
    break;

    case "a":
        console.log('Esta es la versión experimental');
    break;
};

//Definir diferentes marcas de smartphones y dependiendo de cada marca, mostrar una frase relacionada a ella.

//var marca = 'Apple'; //Calidad - No dan cargador :C
//var marca = 'Samsung'; //Calidad, buena cámara, tipo de pantalla - Estos tampoco :C
//var marca = 'Xiaomi'; //Calidad-Humildad-Precio - Tampoco ahora :CCC
//var marca = 'Asus'; //Robustos y gamers
//var marca = 'Huawei'; //Calidad, buen precio
//var marca = 'Oppo'; //Futuristas e innovadores
var marca = 'HTC'; //Calidad, precio :D

switch(marca) {
    case "Apple":
        console.log('No dan cargador :C');
    break;

    case "Samsung":
        console.log('No dan cargador los copiones :v');
    break;
}

//Ciclos
//for - contadores
//while - bucles
//do while - bucle que ejecuta mínimo 1 vez la instrucción

var multiplos5 = [5, 10, 15, 20, 25];
for (var i = 0; i < multiplos5.length; i++) {
    const numero = multiplos5[i];
    console.log(numero);
}

//while
console.log('Antes de iniciar el while')
var encontreUnOnce = false;
var numero = 1;
while(!encontreUnOnce) { //Ciclo infinito
    if(numero % 11 === 0) {
        encontreUnOnce = true;
    }
    numero++;
}

console.log('Hasta que termine el while llego aquí')

do {
    //Se hace algo mínimo 1 vez
} while(!encontreUnOnce);