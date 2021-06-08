//Un objeto es un tipo de dato complejo
//Describe algo, o sea, es abstraer las caracteristicas de algo de nuestro entorno o contexto a codigo
//Los objetos tienene propiedades
//Los objetos tienen atributos y funciones

//Existen otros tipos de estilos, paradigmas de programación eb JS
//OOP (Object Oriented Programming)
//ES
//TypeScript

var alumno = {
    nombre: 'Andres',
    apellido: 'Ontiveros',
    fechaNacimiento: new Date(2021,2,10,9,40,0)

    MostrarNombreCompleto: function (){
        console.log(this.nombre+" "+this.apellido);
    },
    MostrarDatos: function (){
        console.log("Nombre: "+this.nombre);
        console.log("Apellido: "+this apellido);
        console.log("Fecha Nac: "+this.fechaNacimiento);
    }
};

console.log();

