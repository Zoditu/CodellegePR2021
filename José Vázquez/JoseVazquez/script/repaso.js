console.log('Hola');
//Declaración variable
var edad = 25;
//Reasignación
edad = true;

//Declarar diferentes variables en imprimir su valor en la consola del navegador
//Que represente su nombre
//Represente ambos de sus apellidos
//Represente fecha de nacimiento como texto
//Represente Edad
//Represente su sexo

var Nombre = "Jose";
console.log(Nombre);

var Apellidos = ("Vázquez Espinzoa");
console.log(Apellidos);

var FechaDeNacimiento = new Date(1999, 9, 05, 0, 0, 0, 0);
console.log(FechaDeNacimiento);

var Edad = 21;
console.log(Edad);

var Sexo = 'Hombre';
console.log(Sexo);

//****************************************************************** */
function MostrarDatos(nombre, fecha){
    console.log(nombre);
    console.log(fecha);
}
MostrarDatos("José Vázquez", new Date(1999,9,05));

//********************************************************************** */
var Uno = 1;
var Dos = 2;
var Tres = 3;

sumarNumeros(Uno, Dos, Tres);

function sumarNumeros( n1, n2, n3)
{
var suma= n1+n2+n3;
console.log('La suma es:' + suma);

}


function Suma(a, b, c){
    return a + b + c;
}
var resultado = Suma(2, 2, 3);
console.log(resultado);

var numerosPares = [2, 4, 6, 8, 10, 12, 14, 16];
numerosPares.push(18);
console.log(numerosPares[1]);
console.log(numerosPares);

var persona = {
    nombre: 'José',
    edad: 123,
    caminar: function(){
    console.log('Caminando');
    },
    mostrarinfo: function(){
        console.log(this.nombre);
        console.log(this.edad);
    }
};

persona.nombre = 'Nueva persona';
persona.caminar();
persona.mostrarinfo();

var condicion = 5 > 10;
condicion = 10 == 11;
condicion = 10 == 10;
condicion = 10 == "10";
condicion = 10 === "10";
condicion = 15!=10;
condicion = 15!="15";
condicion = 15!=="15"
console.log("condición: " + condicion);

//Sentencias Selectivas
// if-else
//switch
var persona = {
    edad: 26,
    estatura: 171,
    problemaVista: 'Miopía'
};
var mayorEdad = persona.edad>17;
var estaturaMinima = persona.estatura>164;
var tieneProblemasDeVision = persona.problemaVista !== false;
if(mayorEdad && estaturaMinima &&! tieneProblemasDeVision){
    console.log('Esta persona puede aplicar al servicio militar');
} else{
    console.log('Esta persona será un civil para siempre');
}

//***************************************************************************** */


var pastel={
    tipoPan: 'Integral',
    colorPan: 'Cafe Amarillo',
    saborPan: 'Zanahoria',
    saborBetun: 'Queso',
    peso: 1600,
    Tamaño: 'Familiar'
};

if(pastel.saborPan === 'Chcolate' && pastel.saborBetun == 'Chocolate' && pastel.tipoPan === 'Tres Leches'){
    console.log('Es el favorito de Kevin');
} else if(pastel.tipoPan === 'Brownie' && pastel.saborBetun === 'Chocolate'){
    console.log('Es el favorito de Analucia');
} else if(pastel.tipoPan === 'Integral' && pastel.saborPan === 'Zanahoria' && pastel.saborBetun === 'Queso'){
    console.log('Es el favorito del papá de Analucía');
} else if(pastel.tipoPan === 'Tres Leches' && pastel.saborBetun === 'Vainilla' && pastel.tipoDecoracion === 'Fresas'){
    console.log('Es el favorito de Arechiga');
}

//var algo;
//console.log('Algo tiene el valor de: ' + algo)

// console.log(typeof pastel.tipoDecoracion);

//if(typeof pastel.tipoDecoracion !== "undefined"){
//     if(pastel.hasOwnProperty('tipoDecoracion')){ 
//     console.log('Este pastel tiene la propiedad decoracion con el valor: ' + pastel.tipoDecoracion);
// } else{
//     console.log('Este pastel o no tiene la propiedad tipoDecoracion o es false');
// }


var version= 'v'; //'r', 'a', 'b', 'v'
if(version === 'v'){
    console.log('Esta es un aversión nueva');
} else if(version === 'r'){
    console.log('Esta es la version base que s evende');
} else if(version === 'a'){
    console.log('Esta es la versión experimental');
} else if(version === 'b'){
    console.log('Esta es la version de priebas');
}

console.log('*************************************************************')

switch(version){
    case "v":
        console.log('Esta es un aversión nueva');
        break;

    case "r":
        console.log('Esta es la version base que se evende');
        break;
    
    case "a":
        console.log('Esta es la versión experimental');
        break;
    
    case "b":
        console.log('Esta es la version de priebas');
        break;    

};

console.log('************************************************************************')

//******************************************************************* */

var marca = "Samsung";
switch(marca){
    case "Apple":
        console.log('Calidad - No dan cargador');
        break;

    case "Samsung":
        console.log('Calidad, buena cámara, tipo de pantalla - Estos tampoco dan cargador');
        break;
    
    case "Xiaomi":
        console.log('Calidad-Humildad-Precio - Tampoco dan cargador');
        break;
    
    case "Asus":
        console.log('Robustos y gamers');
        break;  
    case "Huawei":
         console.log('Calidad, buen precio');
        break;
        
    case "Oppo":
        console.log('Futuristas e innovadores');
        break;
        
    case "HTC":
        console.log('Calidad, precio :D');
        break;   
}

console.log('**********************************************************')

//CICLOS

var multiplos5=[5, 10, 15, 20, 25];
for (var i = 0; i < multiplos5.length; i++) {
    const numero = multiplos5[i];
    console.log(numero);
}


//while
console.log('Antes de iniciar el while')
var esMultiploDe11 = false;
var numero = 1;
while(!encontreUnOnce){
    if(numero % 11 === 0){
        encontreUnOnce = true;
    }   
    numero++;
}

console.log('Hasta que termine el while llego aquí')

do{

} while(!encontreUnOnce);