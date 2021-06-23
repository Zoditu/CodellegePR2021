function Suma(n1 = 1, n2 = 3) {
    var suma = n1 + n2;
    return suma;
}

var suma = Suma(5, 6);
console.log(suma);
var suma = Suma(2, 10);
console.log(suma);
var suma = Suma();
console.log(suma);
//--------------------------
function NombreCompleto(nombre, apellidoPaterno, apellidoMaterno) {
    var nombreCompleto = nombre + ' ' + apellidoPaterno + ' ' + apellidoMaterno;
    return nombreCompleto;
}
var nombreCompleto = NombreCompleto('José', 'Vázquez', 'Espinoza');
console.log(nombreCompleto);

//---------------------------------------------------------------------------
var mascota = {
    raza: 'chihuhua',
    edad: 7,
    color: 'Blanco con café',
    tamaño: 'Pequeño',
    nombre: 'copo de nieve',
    imagen: 'imagenes/copo.nieve.jpg',
    ladrido: function () {
        //consoloe.log('woof');
        return 'woof';
    }
};
console.log(mascota.ladrido());

function LimitesDeNumero(n1, n2) {
    var esMayor = n1 > n2;
    var resultado = 'El número' + ' '+n1 + ' '+'es' + ' '+(esMayor ? 'mayor' : 'menor o igual') +' '+ 'que el número' + ' '+n2;
    return resultado;
}
console.log(LimitesDeNumero(5, 3));
//---------------------------------------
var arreglo=[ 10, 20, 30, 40, 50 ];
//arreglo[5]=60;
arreglo.push(60);
arreglo=arreglo.concat([70, 80, 90, 100]);

console.log(arreglo);