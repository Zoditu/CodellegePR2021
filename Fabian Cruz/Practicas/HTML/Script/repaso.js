function Suma(n1 = 1, n2 = 3) {
    var suma = n1 + n2;
    return suma;
}

Suma(5,6);

function NombreCompleto(nombre, apellidoPat, apellidoMat) {
    var nombreCompleto = nombre + ' ' + apellidoPat + ' ' + apellidoMat;

    return nombreCompleto;
}

var nombreCompleto = NombreCompleto('Fabian', 'Cruz', 'García')
console.log(nombreCompleto);

var mascota = {
    raza: 'Chihuahua',
    edad: 7,
    color: 'Blanco con café',
    tamaño: 'Pequeño',
    nombre: 'Copo de nieve',
    imagen: 'Imagene/copo.jpg',
    ladrido: function(){
        return 'Woof!! Woof!!'
    }
};

console.log(mascota.ladrido());

function LimiteDeNumero(n1,n2) {
    var esMayor = n1 > n2;

    // El operador ternario hace una pregunta y escoge entre 2 resultados
    var resultado = 'El numero ' + n1 + ' es ' + (esMayor ? 'mayor ' : 'menor o igual ') + 'que ' + n2;
    return resultado;
}

console.log(LimiteDeNumero(2,3));

var arreglo = [10,20,30,40];
arreglo[4] = 50;
arreglo = arreglo.concat([60, 70, 80, 90]);
console.log(arreglo);