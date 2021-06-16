//Hacer una lista de cumpleañeros

var cumpleañeros = [{
        nombre: "Juan Andres Ontiveros Chairez",
        fecha: "07/10/1993",
        imagen: "images/Andres.jpg",
        regalos: "juegos para el Nintendo Switch",
        mostrarDetalles: function () {
            console.log("Nombre: " + this.nombre)
            console.log("Cumple el: " + this.fecha)
            console.log("Le gustaría de regalos: " + this.regalos)
        }
    },
    {
        nombre: "Kevin Maritin del Campo",
        fecha: "14/04/1995",
        imagen: "images/Kevin.jpg",
        regalos:"un pastel de chocolate",
        mostrarDetalles: function () {
            console.log("Nombre: " + this.nombre)
            console.log("Cumple el: " + this.fecha)
            console.log("Le gustaría de regalos: " + this.regalos)
        }
    } ,
    {
        nombre: "Analucia Richo Lankenau",
        fecha: "16/09/1992",
        imagen: "images/Analucia.jpg",
        regalos: "un mostachon de",
        mostrarDetalles: function () {
            console.log("Nombre: " + this.nombre)
            console.log("Cumple el: " + this.fecha)
            console.log("Le gustaría de regalos: " + this.regalos)
        }
    }
];
cumpleañeros[0].mostrarDetalles();
cumpleañeros[1].mostrarDetalles();

//*****************************//
//Sentencias condicionales

var edad=16;
var esMayor= edad>18;
var TipoEdad = esMayor ? "Mayor de edad" : "Menor de edad";

console.log(TipoEdad);

if(esMayor){
    console.log("Mayor de edad")
}else {
    console.log("Menor de edad")
}

for (var i = 0; index < cumpleañeros.length; i++) {
    const element = cumpleañeros[i];
    
}

for (let i = 0; i < cumpleañeros.length; i++) {
    var cumpleañero = cumpleañero[i];
    cumpleañero.mostrarDetalles();
    console.log("----------")
    
}

//Terminó for

var contador = 1;
while (contador < 10){
    console.log("Ciclo While: "+contador);
    contador++;
}
console.log("Debería estar aquí....");

var elementoA="Oxigeno";
var elementoB="Azufre";
var elementoC="Cobre";
var elementoD="Plata";

function mezcla ()