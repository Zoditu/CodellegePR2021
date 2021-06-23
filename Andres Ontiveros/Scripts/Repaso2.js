console.log("Hola");

var nombre = "Juan Andres";
console.log(nombre);

var apellidos = "Ontiveros Chairez";
console.log(apellidos);

var fechaNacimiento = "07 de Octubre de 1993";
console.log(fechaNacimiento);

var edad = 27;
console.log(edad);

var sexo = "Masculino";
console.log(sexo);

function persona(nombre, fechaNacimiento) {
    console.log(nombre);
    console.log(fechaNacimiento);
}

persona("Andres", "07/10/1993");


function suma(n1, n2, n3) {
    suma = n1 + n2 + n3;
    console.log(suma);
}

suma(5, 5, 5);

function Suma(n1, n2, n3) {
    return n1 + n2 + n3;
}
var resultado = Suma(5, 5, 5);
console.log(resultado);

var persona = {
    nombre: "Andres",
    edad: 27,
    caminar: function () {
        console.log("caminando");
    },
    mostrarInfo: function () {
        console.log(this.nombre);
        console.log(this.edad);
    }
};

persona.caminar();
persona.mostrarInfo();

var persona = {
    edad: 17
}

var mayorEdad = persona.edad > 17

if (mayorEdad) {
    console.log("Esta persona es mayor de edad")
} else {
    console.log("Esta persona es menor de edad");
}

var pastel = {
    tipoPan: "tres leches",
    colorPan: "cafe",
    saborPan: "chocolate",
    saborBetun: "chocolate",
    tieneDecoracion: false,
    peso: 500,
    tamaño: 20,
}

/* if (pastel.tipoPan === "tres leches" && pastel.saborPan === "chocolate"){
    console.log("Es el favorito de Kevin")
}else if (pastel.tipoPan === "brownie" && pastel.saborPan === "chocolate") {
console.log ("Es el favorito de Analucia")
}else if (pastel.tipoPan === "Integral" && pastel.saborBetun === "betún de zanahoria"){
    console.log("Es el favorito del papa de Analucia")
}else (pastel.tipoPan === "tres leches" && pastel.saborBetun === "fresa"){
    console.log("Es el favorito de Arechiga")
}; */

switch (Number) {
    case 15:
        console.log("Error de escritura")
        break;
    case 22:
        console.log("Archivo no encontrado")
        break;

    case 320:
        console.log("No se puede acceder a la unidad")
        break;
    case 7890:
        console.log("El archivo es demasiado grande para la unidad")
        break;
    case 871:
        console.log("mostrar “El archivo está corrupto")
        break;
    case 12:
        console.log("El archivo está bloqueado")
        break;
}