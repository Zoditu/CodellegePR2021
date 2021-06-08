var nombre = "Luis Alberto Garcia de los Santos"
console.log(nombre);


function Saludar(nombre){
    console.log("Hola, " + nombre)
}

Saludar("Luis");

var ComFav = ['Hamburguesa', 'Sushi', 'Pollo agridulce'];

console.log("Mi comida favorita es " + ComFav[0] + " y la que menos me gusta es " + ComFav[2]);


function Act4() {
    var alumnos = [];
    alumnos[0] = {
        nombre: "Nombre0",
        apellido: "Apellido0",
        edad: "Edad0",
        sexo: "Sexo0",
    };
    alumnos[1] = {
        nombre: "Nombre1",
        apellido: "Apellido1",
        edad: "Edad1",
        sexo: "Sexo1",
    };
    alumnos[2] = {
        nombre: "Nombre2",
        apellido: "Apellido2",
        edad: "Edad2",
        sexo: "Sexo2",
    };
    console.log('Nombre completo: ' + alumnos[0].nombre + " " + alumnos[0].apellido);
    console.log('Nombre completo: ' + alumnos[1].nombre + " " + alumnos[1].apellido);
    console.log('Nombre completo: ' + alumnos[2].nombre + " " + alumnos[2].apellido);
}
Act4();

