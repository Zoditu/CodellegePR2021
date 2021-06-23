var cumpleañeros = [
    {
        nombre: "Kevin Martin del Campo",
        fecha: "14/04/1995",
        imagen: "images/kevin.jpg",
        regalos: "Me gustaría un pastel de chocolate",
        mostrarDetalles: function() {
            console.log("Nombre: " + this.nombre);
            console.log("Cumple el: " + this.fecha);
            console.log("Le gustaría de regalos: " + this.regalos);
        }
    },
  
    {
        nombre: "Brenda Valeria Torres Mateos",
        fecha: "13/01/1999",
        imagen: "images/valeria.jpg",
        regalos: "Me gustaría una suculenta",
        mostrarDetalles: function() {
            console.log("Nombre: " + this.nombre);
            console.log("Cumple el: " + this.fecha);
            console.log("Le gustaría de regalos: " + this.regalos);
        }
    },

    {
        nombre: "Debanhy Rubi Torres Mateos",
        fecha: "25/06/2003",
        imagen: "images/rubi.jpg",
        regalos: "Me gustaría un kit de maquillaje",
        mostrarDetalles: function() {
            console.log("Nombre: " + this.nombre);
            console.log("Cumple el: " + this.fecha);
            console.log("Le gustaría de regalos: " + this.regalos);
        }
    },

    {
        nombre: "Omar Isai Torres Mateos",
        fecha: "03/06/2009",
        imagen: "images/omar.jpg",
        regalos: "Me gustaría un balón de fútbol",
        mostrarDetalles: function() {
            console.log("Nombre: " + this.nombre);
            console.log("Cumple el: " + this.fecha);
            console.log("Le gustaría de regalos: " + this.regalos);
        }
    },

    {
        nombre: "Alondra Valeria Velázquez Castillo",
        fecha: "16/09/1998",
        imagen: "images/alondra.jpg",
        regalos: "Me gustaría un disco de k-pop",
        mostrarDetalles: function() {
            console.log("Nombre: " + this.nombre);
            console.log("Cumple el: " + this.fecha);
            console.log("Le gustaría de regalos: " + this.regalos);
        }
    },

];

//cumpleañeros[0].mostrarDetalles();
//cumpleañeros[1].mostrarDetalles();
//cumpleañeros[2].mostrarDetalles();
//cumpleañeros[3].mostrarDetalles();
//cumpleañeros[4].mostrarDetalles();

//SENTENCIAS CONDICIONALES

var edad = 15;
var esMayor = edad > 18;

var tipoEdad = esMayor ? "Mayor de edad" : "Menor de edad";
console.log(tipoEdad);

if(esMayor) {
    console.log("Mayor de edad");
} else if(edad === 18){
    console.log("Recien mayor de edad");
} else {
    console.log("Menor de edad");
}

//CICLOS
//Ciclo invertido de ultimo a primero 
//(var i = cumpleañeros.length -1; i >= 0; i--)
for (var i = 0;  i < cumpleañeros.length; i++) {
    const cumpleañero = cumpleañeros[i];
    cumpleañero.mostrarDetalles();
    console.log("------------------------------")
}

var contador = 20;

while( contador < 10) {
   /* if(contador >= 10) {
        break;
    }*/
    console.log("Ciclo While " + contador);

    contador++;
}

/******************* */
console.log("------------------------");

//El do while
contador = 20; 
do {
    /*if(contador >= 10) {
        break;
    }*/
    console.log("Ciclo While " + contador);

    contador++;

} while(contador < 10)

console.log("Debería estar aquí...");
console.log("------------------------");

function MostrarError (codigo = 0 ) {
    /*if(codigo === 0) {
        console.log("Ha ocurrido un error en la aplicación. Código de error: " + código);
    } else if (codigo === 2 ) {
        console.log("No se pudo cargar la información. Código de error: " + código);
    } else if (codigo === 7) {
        console.log("Se perdió la conexión al servidor principal. Código de error: " + codigo);
    } else if (codigo === 14) {
        console.log("No se pudo guardar la información temporal. Código de error: " + codigo);
    } else if (codigo === 19) {
        console.log("Error al intentar leer el archivo de datos. Código de error: " + codigo);
    } else {
        console.log("No se reconoce este código de error: " + codigo);
    }*/

    switch (codigo) {
        case 0:
            console.log("Ha ocurrido un error en la aplicación. Código de error: " + código);
            break;
        
        case 2:
            console.log("No se pudo cargar la información. Código de error: " + código);
            break;

        case 7:
            console.log("Se perdió la conexión al servidor principal. Código de error: " + codigo);
            break;
        
        case 14:
            console.log("No se pudo guardar la información temporal. Código de error: " + codigo);
            break;
        
        case 19:
            console.log("Error al intentar leer el archivo de datos. Código de error: " + codigo);
            break;

    
        default:
            console.log("No se reconoce este código de error: " + codigo);
            break;
    }

}

MostrarError(3);

console.log("------------------------------")
//Operadores lógicos
//AND, OR, XOR, Bitwise, Not 
// Mostrar si un numero pertenece al rango 0-20

var numero = 15;

/*if(numero >= 0) {
    if(numero <= 20){

    }
}*/


//&& = AND
//|| = OR
if(numero >= 0 && numero <= 20) {
    console.log("El número: " + numero + " pertenece al rango 0-20");
}

console.log("------------------------------")
var edad = 15;

//|| = OR
if(edad === 15 || edad === 17) {
    console.log("Si puede participar");
} else {
    console.log("No puede participar");
}


