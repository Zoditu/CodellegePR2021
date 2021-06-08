var ABC = 5;
var XYZ = 10;

//Alcance (Scope)
/**
 * Alcances
 *  -global: Se puede todo lo declarado en otros lado
 *  -local: Se puede ver lo que encapsule un contexto {} y lo global
 * Los parámetros de una función se tratan como variables dentro de ella
 */
sumarNumeros(ABC, 20);

function sumarNumeros( n1, n2 ) 
{
    var suma = n1 + n2;
    console.log('La suma es: ' + suma);
}

function Saludar( nombre ){
    console.log('Hola, ' + nombre);
}

Saludar('Kevin');

function Act4() {
    var alumnos = [];
    alumnos[0] = {
        nombre: "",
        apellido: "",
        edad: 123,
        sexo: ""
    };

    console.log(alumnos[0].nombre + " " + alumnos[0].apellido)
}

Act4();