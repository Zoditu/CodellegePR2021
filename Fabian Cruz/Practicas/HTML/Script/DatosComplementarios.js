// Un objeto es un tipo de dato complejo
// Describe algo, o sea, es abstraer las características de algo de nuestro entorno o contexto a codigo.
// Los objetos tienen propiedades.
// Los objetos también tienen atributos y funciones.

// Existen otros tipos de estilos, paradigmas de programación en JS
// OOP (Object Oriented Programming)
// ES
// TypeScript

function NombreCompleto(nombre, apellido) {
    console.log(nombre + ' ' + apellido)
}

var alumno = {
    nombre: 'Fabian',
    apellido: 'Cruz García',
    fechaNacimiento: new Date(1995,3,1, 6, 49, 0, 0),
    MostrarNombreCompleto: function() {
        console.log(this.nombre + ' ' + this.apellido)
    },
    MostrarDatos: function() {
        console.log('Nombre: ' + this.nombre);
        console.log('Apellido: ' + this.apellido);
        console.log('Fecha Nac: ' + this.fechaNacimiento);
    }
} 

NombreCompleto(alumno.nombre, alumno.apellido);
alumno.MostrarNombreCompleto();
alumno.MostrarDatos();

var array = ['1','2','3','4'];
array.push(5);
console.log(array);
// array.forEach(function(elementoDelArray){
//     sumatorio = sumatorio + elementoDelArray;
// })
console.log(elementoDelArray);

// Array en array

var innerArray = ['a','b','c','d'];
array.push(innerArray);
console.log(array[4][1])

