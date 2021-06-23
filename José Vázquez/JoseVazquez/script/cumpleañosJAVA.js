var cumpleañeros = [];

cumpleañeros.push({
    nombre: 'Jose1  ',
    fecha: '05/10/1999',
    imagen: 'imagen',
    regalos: 'Quiero una bicicleta',
    mostrarDetalles: function () {
        console.log('nombre: ' + this.nombre);
        console.log('cumple el: ' + this.fecha);
        console.log('quiero de regalo: ' + this.regalos);
    }
});

cumpleañeros.push({
    nombre: 'PEPE2',
    fecha: '05/10/1999',
    imagen: 'imagen',
    regalos: 'Quiero una bicicleta',
    mostrarDetalles: function () {
        console.log('nombre: ' + this.nombre);
        console.log('cumple el: ' + this.fecha);
        console.log('quiero de regalo: ' + this.regalos);
    }
});

cumpleañeros.push({
    nombre: 'Jose3',
    fecha: '05/10/1999',
    imagen: 'imagen',
    regalos: 'Quiero una bicicleta',
    mostrarDetalles: function () {
        console.log('nombre: ' + this.nombre);
        console.log('cumple el: ' + this.fecha);
        console.log('quiero de regalo: ' + this.regalos);
    }
});

cumpleañeros[0].mostrarDetalles();
cumpleañeros[1].mostrarDetalles();
cumpleañeros[2].mostrarDetalles();

//************** */
var edad = 15;
var esMayor = edad > 18;
var tipoEdad = esMayor ? 'Mayor de edad' : 'Menor de edad';
console.log(tipoEdad);

if (esMayor) {
    console.log('Mayor de edad');
} else if (edad === 18) {
    console.log('Recien mayor de edad');
} else {
    console.log('Mayor de edad');
}

//ciclos
for (var i = 0; i < cumpleañeros.lenght; i++) {
    var cumpleañero = cumpleañeros[i];
    cumpleañero.mostrarDetalles();
    console.log('*********************')
}
/* AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
var contador =20;
while (true) {
    //while(true){
    if (contador < 10) {
        break;
    }
    console.log('ciclo while ' + contador);
    contador++;
}
//************************ */
/*AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
console.log('debería estar aquí');
//************************ */
/*
contador = 1;
do {
    // if(contador<10){
    // break;
    // }
    contador = 0
    console.log('ciclo while ' + contador);
    contador++;
} while (contador < 10)
console.log('debería estar aquí');
*/
console.log('*********************')

function MostratError(codigo=0){
    /*---if(codigo===0){
        console.log('ha ocurrido un error en la aplicacón. Código error: '+codigo);
    } else if (codigo===2){
        console.log('ha ocurrido un error en la aplicacón. Código error: '+codigo);
    } else if (codigo===7){
        console.log('No se reconoce ningún código de error: '+codigo);
    } else if (codigo===14){
        console.log('No se reconoce ningún código de error: '+codigo);
    } else (codigo===19)
        console.log('No se reconoce ningún código de error: '+codigo);
    }---*/
     
    switch (codigo) {
        case 0:
            console.log('ha ocurrido un error en la aplicacón. Código error: '+codigo);
            break;
            case 2:
            console.log('ha ocurrido un error en la aplicacón. Código error: '+codigo);
            break;case 7:
            console.log('ERROR.ERROR.ERROR .l.: '+codigo);
            break;case 14:
            console.log('ERROR.ERROR.ERROR .l.: '+codigo);
            break;
    
        default:
            break;
    }
    }
    MostratError(14);
    console.log('*********************')

var numero=15;
if(numero>=0 && numero<=20){
    console.log('El número: '+numero+' '+'pertenece al rango 0-20');
}
console.log('*********************')
var edad=15;
if(edad===15 || edad===17){
    console.log('Puede participar');
} else {
    console.log('No puede participar')
}
console.log('*********************')


for (var i = cumpleañeros.length - 1; i>=0; i--) {
    var cumpleañero = cumpleañeros[i];
    cumpleañero.mostrarDetalles();
    console.log("------------------------")
    
}

var contador = 1;
while (true){
    if(contador<10){
        break;
    }

console.log('Ciclo while' + contador);
contador++;
}
console.log('Debería estar aquí...'); 