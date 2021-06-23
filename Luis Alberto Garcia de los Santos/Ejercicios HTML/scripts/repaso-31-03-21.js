var persona = {
    edad: 17,
    estatura: 171,
    ProblemaVista: "Miopia", 
};

var MayorEdad = persona.edad > 17;
var EstaturaMinima = persona.estatura > 164;
var TieneProblemasDeVision = persona.ProblemaVista !== false; // "!==" significa "diferente a"

if(MayorEdad && EstaturaMinima && !TieneProblemasDeVision) { // "&&" significa basicamente "Y"
    console.log("Esta persona puede aplicar al servicio militar") // "!" significa "que no cumple con la variable que le sigue"
} else {
    console.log("Esta persona sera un civil por siempre");
}


/* Crear un objeto que represente un pastel describienedo las propiedades para
* -Tipo de pan (consistencia)
* -Color de pan
* -Sabor del pan
* -Sabor del betun
* -Tiene decoracion?: "Frutas con chocolate"
* - Peso
* -Tamaño (individual, familiar)
*/
// Hacer una seleccion de pasteles:
// Si el pastel es de chocolate y tres leches, imprimir "Es el favorito de Kevin"
// Si es chocolate, de brownie, imprimir "Es el favorito de AnaLucia"
// Si es de fresa y tres leches, imprimir "Es el favorito de Arechiga"

var pastel = {
    TipoDePan: "Integral",
    ColorDePan: "Cafe Amarillo",
    SaborDelPan: "Zanahoria",
    SaborDelBetun: "Queso Crema",
    Peso: 1600,
    Tamaño: "Familiar",
    Decoracion: false,
};

var NOtieneDecoracion = !pastel.Decoracion;
console.log(NOtieneDecoracion);

if(pastel.Decoracion){
    console.log("Este pastel tiene esta decorado con: " + pastel.Decoracion);
} else {
    console.log("Este pastel no tiene decoracion");
}

//Regresa el tipo de dato inferido de una variable o proiedad
//Si tinees: var x = 1
//Entonces typeof "x" te va a regresar "number"
//Regresa dato de variable sin valor como "undefined"
//Sirve para saber si la variable existe o tiene valor

if(typeof pastel.Decoracion !== "undefined"){ 
    console.log("Este pastel tiene esta decorado con: " + pastel.Decoracion);
} else {
    console.log("Este pastel no tiene decoracion");
}

//"hasOwnProperty" solo funciona con texto pero sirve para lo
//mismo que "typeof"

if(pastel.hasOwnProperty("Decoracion")){ 
    console.log("Este pastel tiene esta decorado con: " + pastel.Decoracion);
} else {
    console.log("Este pastel no tiene decoracion");
}

//Sentencias selectivas

if(pastel.SaborDelPan === "Chocolate" && pastel.SaborDelBetun === "Chocolate" && pastel.TipoDePan === "Tres leches"){
    console.log("Es el favorito de Kevin");
} else if(pastel.SaborDelBetun === "Chocolate" && pastel.TipoDePan === "Brownie"){
    console.log("Es el favorito de Ana Lucia");
} else if(pastel.TipoDePan === "Tres Leches" && pastel.Decoracion === "Fresas" && pastel.SaborDelPan === "Vainilla"){
    console.log("Es el favorito de Arechiga");
} else if(pastel.TipoDePan === "Integral" && pastel.SaborDelBetun === "Queso Crema" && pastel.SaborDelPan === "Zanahoria") {
    console.log("Es el favorito del papá de Analucia");
}

//Switch

var version = "V"; // "R", "A", "B", "V"

if(version = "V"){
    console.log("Esta es una version nueva");
} else if(version === "R"){
    console.log("Esta es la version base que se vende");
} else if(version === "A"){
    console.log("Esta version es experimental");
} else if(version === "B"){
    console.log("Esta es la version de prueba");
}

//Para optimizar esto se utiliza el "switch"

switch(version){
    case "V":
        console.log("Esta es una version nueva");
    break;
    case "R":
        console.log("Esta es la version base que se vend");
    break; 
    case "A":
        console.log("Esta version es experimental");
    break; 
    case "B":
        console.log("Esta es la version de prueba");
    break;     
    default:
        console.log("No conzco esta version");
    break;
}

//Definir diferentes marcas de smartphones y dependiendo de cada marca
//mostrar una frase de esta

var marca = "Apple";

switch(marca){
    case "Apple":
        console.log("No dan cargador");
    break;
    case "Samsung":
        console.log("Calidad, buena camara, tipo de pantalla");
    break; 
    case "Xiaomi":
        console.log("Calidad, humildad, precio");
    break; 
    case "Asus":
        console.log("Robustos para gamers");
    break;  
    case "Huawei":
        console.log("Calidad, buen precio");
    break;   
    case "Oppo":
        console.log("Futuristas e innovadores");
    break; 
    case "HTC":
        console.log("Caldad, precio");
    break; 
    default:
        console.log("No conzco esta version");
    break;
}

//Ciclos
//for - contadores
//while - bucles
//do while - bucle que ejecuta minimo 1 vez la instruccion

var multiplos5 = [5, 10, 15, 20, 25];
for (var i = 0; i < multiplos5.length; i++) {
    const numero = multiplos5[i];
    console.log(numero);
}

//while

console.log("Antes de iniciar el 'while'")

var EncontreUnOnce = false;
var numero = 1;
while(!EncontreUnOnce) { //Ciclo infinito
    if(numero % 11 === 0){
        EncontreUnOnce = true;
    }
    numero++; // "++" es para sumar +1
}

console.log("Hasta que termine el 'while' llego aqui")

do{
    //Se hace algo minimo 1 vez
} while(!EncontreUnOnce);