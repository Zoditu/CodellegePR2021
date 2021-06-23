var elementoa = "Oxigeno";
var elementob = "Azufre";
var elementoc = "Cobre";
var elementod = "Plata";

function mezcla(elemento1, elemento2){
if(elemento1 === "Azufre" && elemento2 === "Cobre"){
    console.log("huele raro y se ve verde azulado");
}
else if(elemento1 === "Azufre" && elemento2 === "Plata"){
    console.log("huele raro y se ve cromado");
}
else if(elemento1 === "Oxigeno" && elemento2 === "Cobre"){
    console.log("se ve como la estatua de la libertad");
}
else if(elemento1 === "Oxigeno" && elemento2 === "Plata"){
    console.log("ya le dañamos la joyeria a la abuela");
}
else if(elemento1 === "Oxigeno" && elemento2 === "Azufre"){
    console.log("esto es agua termal mortal?");
}
else{
    console.log("aun no conozco como combinar: " + elemento1 + " con " + elemento2);
}
}

mezcla(elementoa,elementob);

//////////////////////////////////////////////////////
console.log("------------------------------------");

var lista=[
    {nombre: "donas", departamento: "alimentos", precio: 2, peso: 0.200 },
    {nombre: "leche", departamento: "alimentos", precio: 3, peso: 0.300 },
    {nombre: "pan", departamento: "alimentos", precio: 4, peso: 0.400 },
    {nombre: "pinol", departamento: "limpieza", precio: 5, peso: 2.500 },
    {nombre: "cloro", departamento: "limpieza", precio: 6, peso: 2.600 },
];

for(var i=0; i< lista.length; i++){
    const producto = lista[i];
    if(producto.precio<4){
        console.log(producto);
    }
}
var alimentos = [];
var limpieza = [];

for(var i=0; i< lista.length; i++){
    const producto = lista[i];

        if(producto.departamento === "alimentos" ) {
            alimentos.push(producto);
        }
        else if(producto.departamento === "limpieza" ) {
            limpieza.push(producto);
        }
    }
console.log(alimentos);
console.log(limpieza);

for(var i=0; i< lista.length; i++){
    const producto = lista[i];
    if(producto.departamento === "limpieza" && producto> 5 ) {
        producto.precio = producto.precio * 0.9;} 
    else if(producto.departamento === "alimentos" && producto> 3 ) {
        producto.precio = producto.precio * 0.95;}
    total = total + producto.precio;
}

if(total > 30) {
    lista.push({nombre: "Regalo", precio: 0, departamento: "Juguetes", peso: 0})
}

