/* Tipos de datos Primitivos
    String: Texto
    Integer: Números enteros
       Signed Int8 - Enteros de 8 bits (char, byte)
       Unsigned Int8
       0-255, -128 - 127
       Int16 - Enteros de 16 bits (short)
       Int32 - Enteros de 32 bits (enteros)
       Int64 - Enteros de 64 bits (long)
    Float: Números de punto decimal flotantes
        Ej: 1547894555
    Double: Números de punto decimal flotantes de doble precisión
        Ej: 2332432423423.234234234535
    Boolean: true | false
               1  |   0
 */

//Tipos de datos de JavaScript
/*
    No se asignan tipos de datos
    Number: Números de cualquier tipo, enteros o flotantes
    String: Textos
    Boolean: true | false
 */

//Variables
/**
 * Las variables tienen nombres únicos en el alcance
 * Los nombres de variables no pueden tener espacios
 * Puedes incluir números y _ o $
 * NO pueden comenzar con números
 * Cuando no se les da valor, toman el de "undefined"
 */

//Declaración de variable
var edad;

//Asignación de variable
edad = 25;

//Declaración asignativa, inicialización de variable
var _edad = 25;

console.log(_edad);

_edad = "Hola";

console.log(edad);
console.log(_edad);

//Las constantes se manejan igual que las variables
//NO se puede reasignar su valor...
const PI = 3.141592654;

console.log(PI);

/*--------------------------------------------------*/
//Operadores artiméticos
//+, -, *, /, %
//10%5
//Las operaciones aritméticas siempre son con números
//Pueden utilizarse variables con valores numéricos

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
//Concatenación
var suma = Y - X;

console.log(suma);

/*--------------------------------------------------*/
//Operadores condicionales
//<, >, ==, !=
// ===, !==
var mayor = 5 > "10";
console.log(mayor);

var menor = 5 < 10;
console.log(menor);

var mayorIgual = 5 >= 5;
console.log(mayorIgual);

var menorIgual = 6 <= 5;
console.log(menorIgual);

var igual = 5 == "5";
console.log(igual);

var diferente = 5 != "5";
console.log(diferente);

var identico = 5 === 5;
console.log(identico);

var noIdentico = 5 !== "5";
console.log(noIdentico);

//Tipos de datos complejos
//Arreglos: [] Son listas indexadas
var listaAlumnos = ['Andrés Ontiveros', 'Kevin Martin', 25];
//Los arreglos siempre comienzan en la posición 0
console.log(listaAlumnos[0]);
console.log(listaAlumnos[1]);
console.log(listaAlumnos[2]);
console.log(listaAlumnos[3]);

console.log(listaAlumnos);

//Objetos: {} Son estructuras descriptivas de algo
var alumno = {
    nombre: 'Andrés',
    "apellido paterno": 'Ontivero',
    sexo: 'H',
    edad: 123,
    curso: 'PR2021'
};

console.log(alumno["nombre"]);
alumno["nombre"] = 'Mariell';
alumno["inexistente"] = 12345;

console.log(alumno.inexistente);
//Checksum
//Hash
//MD5
//fh374fh9348hffhyu4fhy8ufh9h4fe34f7ufh4897ufh3wy49fjgh45g58ygt47gyhghfdijgh45r7gh

//Integridad
//AES, AES256

var listaObjetos = [alumno];
console.log(listaObjetos[0]);