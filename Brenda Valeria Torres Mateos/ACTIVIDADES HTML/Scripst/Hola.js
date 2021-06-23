console.log("Esto viene de funciones: " + ABC);

alert("Hola Javascript");

edad = 25;

var _edad = 25;

console.log(_edad);

_edad = "Hola";

console.log(edad);
console.log(_edad);

const PI = 3.141592654

console.log(PI)

var suma = 1 + 1;
console.log(suma);

var resta = 10 - 1;
console.log(resta);

var multiplicacion = 10 * 3;
console.log(multiplicacion);

var division = 12 / 5;
console.log(division);

var modulo = 12 % 5;
console.log(modulo);

var X = 10;
var Z = 5;
var Y = "10";
var suma = X - Y;

console.log(suma);

var mayor = 5 > 10;
console.log(mayor);

var menor = 5 < 10;
console.log(menor);

var mayorIgual = 6 >= 5;
console.log(mayorIgual);

var menorIgual = 6 <= 5;
console.log(menorIgual);

var igual = 5 == "5";
console.log(igual);

var igual = 10 != "5";
console.log(igual);

var diferente = 5 != "5";
console.log(diferente);

var identico = 5 === 5;
console.log(identico);

var noIdentico = 5 !== 5;
console.log(noIdentico);

//Tipos de datos complejos
//Arreglos: [] Son listas indexadas
var listaAlumnos = ["Andrés Ontiveros", "Kevin Martin", "25",];
//Los arreglos siempre comienzan en la posición 0

console.log(listaAlumnos[0]);
console.log(listaAlumnos[1]);
console.log(listaAlumnos[2]);
console.log(listaAlumnos[3]);

console.log(listaAlumnos);

//Objetos {} son estructuras descriptivas de algo
var alumno = {
    nombre: "Andrés",
    "apellido paterno": "Ontivero",
    sexo: "H",
    edad: "25",
    curso: "Primavera 2021"
};

console.log(alumno["nombre"]);

alumno["nombre"] = "Mariell";
alumno["inexistente"] = 1234;
console.log(alumno["inexistente"])

var listaObjetos = [alumno];
console.log(listaObjetos[0])






