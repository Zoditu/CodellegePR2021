//Un objeto es un tipo de dato complejo
//Describe algo, o sea, es abstraer las características de algo de nuestro entorno o contexto a código
//Los objetos tiene propiedades
//Los objetos también tienen atributos y funciones

//Existen otros tipos de estilos, paradigmas de programación en JS
//OOP (Object Oriented Programming)
//ES
//TypeScript

function NombreCompleto(nombre, apellido) {
    console.log(nombre + " " + apellido);
}

var alumno = {
    nombre: 'Kevin',
    apellido: 'Martin del Campo',
    fechaNacimiento: new Date(1995, 3, 14, 9, 40, 0, 0),
    MostrarNombreCompleto: function () {
        console.log(this.nombre + " " + this.apellido);
    },
    MostrarDatos: function() {
        console.log("Nombre: " + this.nombre);
        console.log("Apellido: " + this.apellido);
        console.log("Fecha Nac: " + this.fechaNacimiento);
    }
};

//NombreCompleto(alumno.nombre, alumno["apellido"]);
alumno.MostrarNombreCompleto();
alumno.MostrarDatos();