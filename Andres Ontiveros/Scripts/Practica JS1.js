var nombre

nombre = 'Juan Andres Ontiveros Chairez'

console.log(nombre);

console.log('Hola ' + nombre)


function Saludar(Nombre) {
    console.log('Hola ' + Nombre);
}
Saludar('Andres')

var listaComida = ['Pastel azteca', 'Pizza', 'Nopales'];
console.log('Mi comida favorita es; ' + listaComida[0]);
console.log('Y la que menos me gusta es: ' + listaComida[2]);


function act4() {
    var alumnos = [];
    alumnos[0] = {
        Nombre: 'Andres',
        Apellido: 'Ontiveros',
        Edad: '27 años',
        Sexo: 'Hombre',
    }
    alumnos[1] = {
        Nombre: 'Tomas',
        Apellido: 'Jasso',
        Edad: '23 años',
        Sexo: 'Hombre',
    }
    alumnos[2] = {
        Nombre: 'AnaLucía',
        Apellido: 'Richo',
        Edad: '28 años',
        Sexo: 'Mujer',
    }
    console.log('Nombre completo: '+alumnos[0].Nombre + " " + alumnos[0].Apellido);
    console.log('Nombre completo: '+alumnos[1].Nombre + " " + alumnos[1].Apellido);
    console.log('Nombre completo: '+alumnos[2].Nombre + " " + alumnos[2].Apellido);
}
act4();