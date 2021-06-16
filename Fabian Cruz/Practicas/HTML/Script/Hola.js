/* 
    Tipos de datos
    String: Texto
    Integer: Números enteros
        Signed Int8 - Enteros de 8 bits (char, byte)
        Unigned Int8
        0 - 255, (-128) - (127)
        Int16 - Enteros de 16 bits (short)
        Se pueden tener enteros de 2 a la 16 en positivos
        Se puede tener enteros de 2 a la 15 en positivos y negativos
        Int32 - Enteros de 32 bits (enteros)
        Se pueden tener enteros de 2 a la 32 en positivos
        Se puede tener enteros de 2 a la 31 en positivos y negativos
        Int64 - Enteros de 64 bits (log)
        Se pueden tener enteros de 2 a la 64 en positivos
        Se puede tener enteros de 2 a la 63 en positivos y negativos
    
    Float: Números de punto decimal flotantes (6 flotantes)
        Ej: 16.454637
    Double: Números de punto decimal flotantes de doble presicion (+ decimales que el float)
        Ej: 164095393.363636
    Boolean: true or false
                1 or 0
*/
/*
    No se asignan tipos de datos
    Number: Números de cualquier tipo(enteros o flotantes)
    String: Textos
    Boolean: true | false
*/ 

// Variables
/*
- Las variables tienen nombres únicos en el alcance
- Los nombres de variables no pueden tener espacios
- Puedes incluir números y _ o $
- NO pueden comenzar con números
- Cuando no se les da valor, toman el de 'undefined'
*/ 

// Declaración de variable
var edad;

// Asignación de variable
edad = 25;

// Declaración asignativa | inicialización de variable
var _edad = 25;

console.log(_edad);

_edad = 26

console.log(edad);
console.log(_edad);

// Constantes
// Las constantes se manejan igual que las variables
// No se puede reasignar su valor...
const PI = 3.141592654;
console.log(PI);

/*----------------------------------------------------*/ 
// Operadores aritmeticos +, -, *, /, %
// Las operaciones siempre son con números
// Pueden utilizarse variables con valores numericos
var suma = 1 + 1;
console.log(suma);

var resta = 10 -1;
console.log(resta);

var multiplicacion = 10 * 3;
console.log(multiplicacion);

var division = 12 / 5;
console.log(division);

var modulo = 12 % 5;
console.log(modulo);

var x = 'Hola';
var y = 'Mundo';

// Concatenación
var suma = x + y

console.log(suma)

/*-------------------------------------------------------*/ 
// Operador condicional
// <, >, == (igual), != (diferente)
// === (identico), !== (no identico)


// TIpos de datos complejos
// Arrays: [] Son listas indexadas
var listaAlumnos = ['Andres Ontiveros', 'Kevin Martin', 25];
// Los arreglos comienzan en la posicion 0
listaAlumnos[4] = 'Fabian Cruz'
console.log(listaAlumnos[0])
console.log(listaAlumnos[1])
console.log(listaAlumnos[2])
console.log(listaAlumnos[3])
console.log(listaAlumnos[4])

console.log(listaAlumnos)

// Objetos: {} Estructuras descriptivas de algo
var alumno = {
    nombre: 'Andres',
    apellido: 'Ontiveros',
    sexo: 'H',
    edad: 123,
    curso: 'PR2021',
};

console.log(alumno.nombre)

var listaObjetos = [alumno]
console.log(listaObjetos);
