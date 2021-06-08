/* 
Tipos de datos
String: Texto
Ineger: Numeros enteros
Signed Int8 - Enteros de 8 bits (char)
    Unsigned Int8
      0-255, -128-127
    Int16 - Enteros de 16 bits (short)
    Int32 - Enteros de 32 bits (enteros)
    Int64 - Enteros de 64 bits (long)
Floats: Numeros de punto decimal flotantes
    Ej: 1547894555
Double: Numeros depunto decimal flotantes de doble precision
    Ej: 23456789.23456789
Boolean: true | False
           1  |   0
*/

// Tipos de datos de JavaScript
/*
No se asignan tipos de datos
Number: Numeros de cualquier tipo, enteros o flotantes
String: Textos
Boolean: true | False
*/

//Variables
/**
 * Las variables tienen nombres unicos en el alcance
 * Los nombres de variables no pueden tener espacios
 * Pueden incluir numeros y _ o $
 * No pueden comenzar on numeros
 * Cuando no se les da valor, toman el de "undefined"
 * 
 */

//Declaracion de variable
var Edad

//Asignacion de variable
Edad=27;

//Declaracion asignativa, inicializacion de variable
var _Edad=27;

console.log(Edad);
console.log(_Edad);

//Constante
//Se manejan igual que las variables 
//No se puede reasignar su valor

const PI=3.141592654;

console.log(PI);

//Operadores aritmeticos
//+,-,*,/,%
//
var suma=1+1;
console.log(suma)

var resta=10-1;
console.log(resta)

var multiplicacion=10*3;
console.log(multiplicacion)

var division=12/5;
console.log(division)

var modulo=12%5;
console.log(modulo)

/* --------*/
//Operadores condicionales
//<,>,==,!=
//===,!==
//10%5
//Las operaciones aritmeticas siempre son con numeros
//Concatenar - Sumar textos

var mayor=5>10;
console.log(mayor);

var menor=5<10;
console.log(menor);

var mayorigual= 5>=5;
console.log(mayorigual);

var menorigual= 5>=5;
console.log(menorigual);

var igual= 5=="5";
console.log(igual);

var diferente= 5 !="5";
console.log(diferente);

var identico=5 === 5;
console.log(identico);

var noidentico= 5 !== 5;
console.log(noidentico);

//Tipos de datos complejos
//Arreglos: [] Son listas indexadas
var listaalumnos=[];
//Los arreglos siempre comienzan en la posición 0
console.log(listaalumnos[0]);

//Objetos: {} Son estructuras descriptivas de algo

var alumno={
    nombre: 'Andres',
    apellido: 'Ontiveros',
    sexo: 'H',
    edad: 123,
    Curso: 'PR2021',
};

//Hash
//Checksum
//MD5
//
//Integridad
//AES, AES256
