function NombreCompleto (nombre, apellidopaterno, apellidomaterno){
    var nombrecompleto = nombre + " " + apellidopaterno + " " + apellidomaterno;

    return nombrecompleto;
}

var nombrecompleto = NombreCompleto("Luis A.", "Garcia", "de los Santos");
console.log(nombrecompleto);


var mascota = {
    raza: "golden",
    edad: 1,
    color: "dorado",
    tamaño: "grande",
    nombre: "estelle",
    imagen: "imagenes/estelle_001.jpg",
    ladrar: function(){
        // console.log ("Woof");
        return "Woof";
    }
};

console.log(mascota.ladrar());

function limitesdenumero (n1, n2){
    var esmayor = n1 > n2;
    var resultado = "El numero "+ n1 + " " + (esmayor ? " es mayor que " : "es menor o igual") + " que el numero " + n2;
    return resultado;
}

console.log (limitesdenumero(2,3));




var arreglo = [10, 20, 30, 40, 50]; //Deben ser del mismo tipo
arreglo[0] = 11;
arreglo.push(60); //solo agrega el valor al final
arreglo = arreglo.concat([70, 80, 90, 100]);

console.log (arreglo);
