console.log("Hola uwu");

//Declaracion de variable inicializada
var edad = 25;

//Reasignacion de variable
edad = true;

//Declarar diferentes variables e imprimir su valor en la consola del navegador.

/* Que represente su nombre
*  Que represente ambos apellidos
*  Que represente su fecha de nacimiento como texto
*  Que represente su edad
*  Que represente su sexo
*/

var nombre = "Luis Alberto";
var apellidos = "Garcia de los Santos";
var fecha_de_nacimiento = "30/03/1992";
var fecha_d_nac = new Date(1992, 2, 30); //Otra forma de poner fechas//
var edad = 29;
var sexo = "Masculino";

console.log(nombre);
console.log(apellidos);
console.log(fecha_de_nacimiento);
console.log(fecha_d_nac);
console.log(edad);
console.log(sexo);

//Declara una funcion que muestre en la consola el nombre de una persona y su fecha de nacimiento

function MostrarDatos(nombre, fecha){
    console.log(nombre);
    console.log(fecha);
}

MostrarDatos("Luis Garcia", new Date(1992,2,30));

//Declarar la funcion suma que tome de parametros 3 numeros y regresa de resultado la suma de estos

function sumar(a, b, c){
    return a + b + c;
 }

var resultado = sumar(1, 2, 3);
console.log(resultado);


var NumerosPares = [2, 4, 6, 8, 10, 12, 14, 16];
NumerosPares.push(18); //Añade un elemento al final de la funcion
console.log(NumerosPares[2]); //Al poner "2" sumara los primeros 3 numeros, osea del numero 0 al 2
console.log(NumerosPares);


var persona = {
    nombre: "Al", //No se pueden duplicar nombres de variables dentro de la misma variable
    edad: 29,
    caminar: function(){ //Se pueden agregar funciones
         console.log("caminando");
    },
      MostrarInfo:  function() {
          console.log(this.nombre); //Funciona para llamar a las variables dentro de este domino
          console.log(this.edad);
      }, //Si es el ultimo valor no habra interferencia y no se le tiene que poner coma, pero no hay problema si se le pone
};

persona.caminar();
persona.MostrarInfo();

//Tipos de operadores condicionales
var condicion = 5 > 10;
condicion = 10 == 11; // "==" es para decir "igual a", en este caso seria false
condicion = 10 == 10; // true
condicion = 10 == "10"; // true, java puede convertir cierto texto en numero y en este caso seria igual
condicion = 10 === "10"; // false, "===" es para decir "identico a", por lo que un valor numerico no es igual a un texto
condicion = 15 != 10; //true
condicion = 15 != "15";//false, "!=" significa "diferente" 
condicion = 15 !== "15";//true, mientras que "!==" significa "no identico"
console.log ("Condicion " + condicion);


