/**Crear 4 variables:

elementoA = 'Oxígeno'
elementoB = 'Azufre'
elementoC = 'Cobre'
elementoD = 'Plata'

*Crear la función Mezcla, que reciba de parámetro dos elementos.
Al pasar dos elemento, hacer la siguientes comparaciones:
    -Si es Azufre + Cobre, regresamos "Huele raro y se ve verde azulado"
    -Si es Azufre + Plata, regresamos "Huele raro y se ve cromado"
    -Si es Oxígeno + Cobre, regresamos "Se ve como la estatus de la libertad"
    -Si es Oxígeno + Plata, regresamos "Ya le dañamos la joyería a la abuela"
    -Si es Plata + Cobre, regresamos "Eso es joyería rara y cara :V"
    -Si es Azufre + Oxígeno, regresamos "Es esto un agua termal mortal?"

*Mandarla a llamar con diferentes combinaciones
*/

var elementoA = 'Oxígeno',
    elementoB = 'Azufre',
    elementoC = 'Cobre',
    elementoD = 'Plata';

function Mezcla(elem1, elem2) {
    if (elem1 === 'Azufre' && elem2 === 'Cobre' || elem1 === 'Cobre' && elem2 === 'Azufre') {
        console.log("Huele raro y se ve verde azulado");
    } else if (elem1 === 'Azufre' && elem2 === 'Plata') {
        console.log("Huele raro y se ve cromado");
    } else if (elem1 === 'Oxígeno' && elem2 === 'Cobre') {
        console.log("Se ve como la estatua de la libertad");
    } else if (elem1 === 'Oxígeno' && elem2 === 'Plata') {
        console.log("Ya le dañamos la joyería a la abuela");
    } else if (elem1 === 'Plata' && elem2 === 'Cobre') {
        console.log("Eso es joyería rara y cara :V");
    } else if (elem1 === 'Azufre' && elem2 === 'Oxígeno') {
        console.log("Es esto un agua termal mortal?");
    } else {
        console.log('Aún no conozco como combinar: ' + elem1 + " con " + elem2);
    }
}

Mezcla(elementoA, elementoD);

//Tortillas && (salsaVerde || salsaRoja)

/*
    Crear una lista del supermercado de la siguiente manera: (Mínimo 5 productos)
        -Cada artículo del carrito debe tener: nombre, precio, peso.
        Ej: {nombre: "Plátano", precio: 19.40, peso: "860g"}

    Mostrar SOLO los elementos con un precio mayor a 50 pesos.
*/

var lista = [{
        nombre: "Plátano",
        departamento: "Alimentos",
        precio: 19.40,
        peso: 0.86
    },
    {
        nombre: "Shampoo",
        departamento: "Belleza",
        precio: 74,
        peso: 1
    },
    {
        nombre: "Camarón",
        departamento: "Alimentos",
        precio: 125,
        peso: 0.5
    },
    {
        nombre: "Salchicha",
        departamento: "Alimentos",
        precio: 34.45,
        peso: 0.54
    },
    {
        nombre: "Manzana",
        departamento: "Alimentos",
        precio: 26.00,
        peso: 0.86
    },
    {
        nombre: "Pack Jugos",
        departamento: "Alimentos",
        precio: 80.00,
        peso: 6
    },
    {
        nombre: "Jabón corporal",
        departamento: "Belleza",
        precio: 55.00,
        peso: 0.3
    }

];

for (var i = 0; i < lista.length; i++) {
    const producto = lista[i];
    if (producto.precio > 50) {
        console.log(producto);
    }
}

/****************************************************/
/**
 * De la misma lista de artículos, añadir un departamento general.
 * Ordenar los elementos en listas por departamentos.
 * Ej: Meter el artículo: {nombre: "Plátano", departamento: "Alimentos", precio: 19.40, peso: "860g"}
 * a la lista de alimentos
 */

var alimentos = []; //5 alimentos
var belleza = []; //2 belleza

for (var i = 0; i < lista.length; i++) {
    const producto = lista[i];

    if (producto.departamento === 'Alimentos') {
        alimentos.push(producto);
    } else if (producto.departamento === 'Belleza') {
        belleza.push(producto);
    }
}

console.log(alimentos);
console.log(belleza);

/*************************************************************/
/**
 * Con la lista anterior, vamos a verificar cada producto:
 * -Si el producto es de belleza y cuesta más de 50 pesos, aplicar un 10% de descuento al precio
 * -Si el producto es de alimentos y lleva más de 20 pesos, aplicar un 5% de descuento al precio
 * -Si lleva un total en toda la lista de más de 300 pesos, añadir un juguete gratis: 
 * {nombre: "Regalo", precio: 0, departamento: "Jueguetes", peso: "0"}
 */

var total = 0;
for (var i = 0; i < lista.length; i++) {
    const producto = lista[i];

    if (producto.departamento === 'Belleza' && producto.precio > 50) {
        producto.precio = producto.precio * 0.9;
    } else if (producto.departamento === 'Alimentos' && producto.precio > 20) {
        producto.precio = producto.precio * 0.95;
    }

    total = total + producto.precio;
}

if(total > 300) {
    lista.push({nombre: "Regalo", precio: 0, departamento: "Jueguetes", peso: "0"});
}

console.log(lista);

/**
 * variables y constantes
 * tipos de datos
 * funciones
 * arreglos
 * objetos (propiedad, funciones)
 * operadores airméticos, operadores condicionales
 * sentencias selectivas (if-else, switch)
 * operador ternario (condicion ? VALOR1 : VALOR2)
 * ciclos (for, while, do while)
 * operadores lógicos (AND, OR)
 */