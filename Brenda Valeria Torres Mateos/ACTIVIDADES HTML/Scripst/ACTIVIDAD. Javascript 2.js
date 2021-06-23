var elementoA = "Oxígeno", 
    elementoB = "Azufre", 
    elementoC = "Cobre",
    elementoD = "Plata";

function Mezcla (elem1, elem2) {
    if(elem1 === "Azufre" && elem2 === "Cobre" || elem1 === "Cobre" && elem2 === "Azufre") {
        console.log("Huele raro y se ve azulado");
    } 
    else if(elem1 === "Azufre" && elem2 === "Plata") {
        console.log("Huele raro y se ve cromado");
    } 
    else if(elem1 === "Oxígeno" && elem2 === "Cobre") {
        console.log("Se ve como la estatua de la libertad");
    }
    else if(elem1 === "Oxígeno" && elem2 === "Plata") {
        console.log("Ya le dañamos la joyería a la abuela");
    }
    else if(elem1 === "Plata" && elem2 === "Cobre") {
        console.log("Eso es joyería rara y cara");
    }
    else if(elem1 === "Azufre" && elem2 === "Oxígeno") {
        console.log("¿Esto es un agua termal mortal?");
    }
    else {
        console.log("Aún no conozco como combinar: " + elem1 + " con " + elem2);
    }
}

;
Mezcla(elementoA, elementoD); 
Mezcla(elementoB, elementoA);
Mezcla(elementoB, elementoC);
Mezcla(elementoB, elementoD);
Mezcla(elementoA, elementoC);
Mezcla(elementoD, elementoC);

console.log("------------------------------");

var lista = [
    {nombre: "Plátano", departamento: "Alimentos", precio: 19.40, peso: .86},
    {nombre: "Shampoo", departamento: "Belleza", precio: 74, peso: 1},
    {nombre: "Camarón", departamento: "Alimentos", precio: 125, peso: 0.5},
    {nombre: "Salchicha", departamento: "Alimentos", precio: 34.45, peso: 0.54},
    {nombre: "Manzana", departamento: "Alimentos", precio: 26.00, peso: 0.86},
    {nombre: "Pack Jugos", departamento: "Alimentos", precio: 60.00, peso: 6},
    {nombre: "Jabón Corporal", departamento: "Belleza", precio: 55.00, peso: 0.3}
];

for (var i = 0; i < lista.length; i++) {
    const producto = lista[i];
    if(producto.precio > 50) {
        console.log(producto);
    }
}

var alimentos = [];
var belleza = [];

for (var i = 0; i < lista.length; i++) {
    const producto = lista[i];

    if(producto.departamento === "Alimentos") {
        alimentos.push(producto);
    }
    else if(producto.departamento === "Belleza") {
        belleza.push(producto);
    }
    
}

console.log(alimentos);
console.log(belleza);

console.log("------------------------------");

var total = 0;
for (var i = 0; i < lista.length; i++) {
    const producto = lista[i];

    if(producto.departamento === "Belleza" && producto.precio > 50) {
        producto.precio = producto.precio * 0.9;
    } 
    else if(producto.departamento === "Alimentos" && producto.precio > 20) {
        producto.precio = producto.precio * 0.95;
    }

    total = total + producto.precio;
}

if(total > 300) {
    lista.push({nombre: "Regalo", precio: 0, departamento: "Juguetes", peso: 0});
}

console.log(lista);


/** 
 * variables y constntes
 * tipos de datos
 * funciones
 * arreglos
 * objetos (propiedad, funciones)
 * operadores aritméticos, operadores condicionales
 * sentencias selectivas (if-else, switch)
 * operador ternario (condicion ? VALOR1 : VALOR2)
 * cliclos (for, while, do while)
 * operadores lógicos (AND, OR)
 */