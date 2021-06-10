function Suma(n1 = 1, n2 = 2) {
    var suma = n1 + n2;
    return suma;
} //void

var suma = Suma(5, 6);
console.log(Suma(5,6));

suma = Suma(2, 10);
console.log(suma);

suma = Suma();
console.log(suma);

//Crear la función NombreCompleto, que reciba de parámetro: nombre, apellidoPaterno y apellidoMaterno.
//El resultado debe regresar la concatenación de los 3 valores
//Imprimir el valor regresado con la consola
function NombreCompleto(nombre, apellidoPaterno, apellidoMaterno){
    var nombreCompleto = nombre + " " + apellidoPaterno + " " + apellidoMaterno;

    return nombreCompleto;
}

var nombreCompleto = NombreCompleto('Kevin', 'Martin del Campo', 'Fernández');
console.log(nombreCompleto);

//Crear el objeto mascota
var mascota = {
    raza: "Chihuahua",
    edad: 7,
    "color mascota": "Blanco con café",
    tamaño: "Pequeño",
    nombre: "Copo de nieve",
    imagen: "imagenes/copo.jpg",
    ladrido: function(){
        //console.log('Woof');
        return "Woof";
    }
};

console.log( mascota["color mascota"] );

function LimitesDeNumero(n1, n2) {
    var esMayor = n1 > n2;
    //El operador ternario hace una pregunta y escoge entre 2 resultados
    //Ej: 2 es mayor que 3 ? "Si" : "No"
    //El número 2 es 

    return "El número " + n1 + " es " + (esMayor ? "mayor" : "menor o igual") + " que el número " + n2;
}

console.log( LimitesDeNumero(5, 3) );

var numeroUno = 1;
var suma = numeroUno + 1; //2
var suma = 1 + 1; //2

var n1 = 10;
var n2 = 5;

Suma(n1, n2); //15
Suma(10, 5);  //15
Suma(n1, 5);  //15

var arreglo = [ 10, 20, 30, 40, 50 ]; //Deben ser del mismo tipo
//arreglo[5] = 60;
arreglo.push(60);
arreglo = arreglo.concat([70, 80, 90, 100]);

console.log(arreglo);