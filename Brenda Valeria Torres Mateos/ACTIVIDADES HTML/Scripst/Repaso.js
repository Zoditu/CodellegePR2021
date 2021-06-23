function Suma(n1 = 1, n2 = 2) {
    var suma = n1 + n2;
    return suma;
}

var suma = Suma(5, 6);
console.log(Suma(5,6)); 

var suma = Suma(2, 10);
console.log(suma);

var suma = Suma();
console.log(suma);


function NombreCompleto(nombre, apellidoPaterno, apellidoMaterno)
{
    var nombreCompleto = nombre + " " +  apellidoPaterno + " " + apellidoMaterno;

    return nombreCompleto;
}

var nombreCompleto = NombreCompleto ("Kevin", "Martin del Campo", "Fernández");
console.log(nombreCompleto);

//Manera de asignar una funcion a un objeto
var mascota = {
    raza: "Chihuahua",
    edad: 7,
    "color mascota": "Blanco con café",
    tamaño: "Pequeño",
    nombre: "Copo de nieve",
    ladrido: function (){
        //console.log("Woof");
        return "Woof";
    }
}

console.log(mascota["color mascota"]);

function LimitesDeNumero(n1, n2) {
    var esMayor = n1 > n2;

    //El operador ternario hace una pregunta y escoge entre dos resultados.
    //Ej: 2 es mayor que 3 ? "Si" : "No"
    var resultado = "El número " + n1 + " es " + (esMayor ? "mayor" :  "menor o igual") + " que el número " + n2;

    return resultado;
}

console.log( LimitesDeNumero (5, 3) );


var arreglo = [10, 20, 30, 40, 50]; //Deben ser del mismo tipo
//arreglo[5] = 60;
arreglo.push(60);
arreglo = arreglo.concat([70, 80, 90, 100]);

console.log(arreglo);