/*var elementoA = "Oxigeno";
var elementoB = "Azufre";
var elementoC = "Cobre";
var elementoD = "Plata";

function mezcla(E1, E2) {
    if (E1 === "Azufre" && E2 === "Cobre" || E2 === "Azufre" && E1 === "Cobre") {
        console.log("Huele raro y se ve verde azulado");
    } else if (E1 === "Azufre" && E2 === "Plata") {
        console.log("Huele raro y se ve cromado");
    } else if (E1 === "Oxigeno" && E2 === "Cobre") {
        console.log("Se ve como la estatus de la libertad");
    } else if (E1 === "Oxigeno" && E2 === "Plata") {
        console.log("Ya le dañamos la joyería a la abuela");
    } else if (E1 === "Plata" && E2 === "Cobre") {
        console.log("Eso es joyería rara y cara :V");
    } else if (E1 === "Azufre" && E2 === "Oxigeno") {
        console.log("Es esto un agua termal mortal?");
    } else {
        console.log("Aún no conozco como combinar: " + E1 + " con " + E2);
    }

}

mezcla(elementoA, elementoB);

var listaSuperMercado = [{
        nombre: "Platano",
        precio: 25.50,
        peso: "1kg",
        departamento: "Alimentos",
    },
    {
        nombre: "manzana",
        precio: 18.50,
        peso: "500g",
        departamento: "Alimentos",
    },
    {
        nombre: "pera",
        precio: 55.25,
        peso: "4kg",
        departamento: "Alimentos",
    },
    {
        nombre: "Sandia",
        precio: 20,
        Peso: "1kg",
        departamento: "Alimentos",
    },
    {
        nombre: "frijol",
        precio: 10,
        peso: "3kg",
        departamento: "Alimentos",
    },
    {
        nombre: "Maquillaje",
        precio: 300,
        peso: "150gr",
        departamento: "Belleza",
    },
    {
        nombre: "Protector solar",
        precio: 500,
        peso: "50ml",
        departamento: "Belleza",
    }
]

for (var i = 0; i < listaSuperMercado.length; i++) {
    const producto = listaSuperMercado[i];
    if (producto.precio > 50) {
        console.log(producto);
    }
}

var alimentos = [];
var belleza = [];

for (let i = 0; i < listaSuperMercado.length; i++) {
    const producto = listaSuperMercado[i];
    if (producto.departamento === "Alimentos") {
        alimentos.push(producto);
    } else if (producto.departamento === "Belleza") {
        belleza.push(producto);
    }
}

console.log(alimentos);
console.log(belleza);

var total=0;
for (var i = 0; i < listaSuperMercado.length; i++) {
    const producto = listaSuperMercado[i];

    if (producto.departamento === "Belleza" && producto.precio > 50) {
        producto.precio = producto.precio * 0.9;
    } else if (producto.departamento === "Alimentos" && producto.precio > 20) {
        producto.precio = producto.precio * 0.95;
    }

    total = total + producto.precio;
    console.log(producto.precio);
}

if (total > 300) {
    listaSuperMercado.push({
        nombre: "Regalo",
        precio: 0,
        departamento: "Jueguetes",
        peso: "0"
    });
}

console.log(listaSuperMercado);
console.log(total);
*/

var ElementoA ="Oxigeno"
var ElementoA ="Azufre"
var ElementoA ="Cobre"
var ElementoA ="Plata"

function mezcla(E1,E2){
    if (E1==="Azufre" && E2==="Cobre")
    console.log("la mezcla de "+E1+" y "+E2+" Huele raro y se ve verde azulado")
}

mezcla("Azufre","Cobre");


/* Kevin Martin del Campo Fernandez
    
* Suponiendo que se tiene un arreglo llamado nombres, con los valores 'Kevin', 'Luis', 'Fabian', Mariell', 'Tomás', recorrerlo y mostar los nombres en ese orden, pero al revés, o sea, comenzando de Tomás y terminar en Kevin. */


var nombres = ['Kevin', 'Luis', 'Fabian', 'Mariell', 'Tomás',]
for (var i = nombres.lenght - 1; i < -1; i--) {
    const nombre = nombres[i];
    
    console.log(nombre)
}
