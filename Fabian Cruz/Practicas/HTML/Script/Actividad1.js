var nombre = 'Fabian Cruz';

// console.log(nombre);
// Los parametros de una funcion se tratan como variables dentro de ella


function saludar(nombre) {
    console.log('Hola ' + nombre);
}

saludar(nombre);

// Crear una lista de comidas favorita, ordenadas de mayor a menor favoritismo. (minimo 3) imprimir en la consola:
// Mi comida favorita es: AAAA y la que menos nos gusta es: BBBBBB

comidasFav = ['Hamburguesas','Sandwich de pollo','Tacos de picadillo']

console.log('Mi comida favorita es: ' + comidasFav[0]) 
console.log('y la que menos me gusta es: ' + comidasFav[2])

// Nombre, apellido, edad, sexo
// Imprimir nombre y apellido junto de los 3

function Act4() {
    var alumnos = [];

    alumnos[0] = {
        Nombre: 'Fabian',
        Apellido: 'Cruz',
        Edad: '25',
        Sexo: 'H',
    };
    alumnos[1] = {
        Nombre: 'Juan',
        Apellido: 'Cruz',
        Edad: '22',
        Sexo: 'H',
    };
    alumnos[2]  = {
        Nombre: 'Julia',
        Apellido: 'Martinez',
        Edad: '28',
        Sexo: 'M',
    };

    console.log('Nombre Completo: ' + alumnos[0].Nombre + ' ' + alumnos[0].Apellido);
    console.log('Nombre Completo: ' + alumnos[1].Nombre + ' ' + alumnos[1].Apellido);
    console.log('Nombre Completo: ' + alumnos[2].Nombre + ' ' + alumnos[2].Apellido);
}

Act4();