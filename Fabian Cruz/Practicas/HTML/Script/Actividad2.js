var list = [
    {
        nombre: 'Platano',
        departamento: 'Alimentos',
        precio: 20.30,
        cantidad: 1,
    },
    {
        nombre: 'Manzana',
        departamento: 'Alimentos',
        precio: 32.50,
        cantidad: 1,
    },
    {
        nombre: 'Papaya',
        departamento: 'Alimentos',
        precio: 51.89,
        cantidad: 2.75,
    },
    {
        nombre: 'Leche',
        departamento: 'Abarrotes',
        precio: 120,
        cantidad: 6,
    },
    {
        nombre: 'Jabón',
        departamento: 'Limpieza',
        precio: 130,
        cantidad: 1.75,
    },
    {
        nombre: 'Shampoo',
        departamento: 'Limpieza',
        precio: 65.80,
        cantidad: .98,
    }
]

for (var i = 0; i < list.length; i++){
    const producto = list[i];
    if(producto.precio > 50){
        console.log(list[i].nombre);
    }
}

console.log('--------------------------------------------')

var alimentos =[];
var limpieza = [];
var abarrotes = [];

for (var i = 0; i < list.length; i++) {
    const producto = list[i];
    if (producto.departamento === 'Alimentos') {
        alimentos.push(producto);
    } else if (producto.departamento === 'Limpieza') {
        limpieza.push(producto);
    } else if (producto.departamento === 'Abarrotes') {
        abarrotes.push(producto);
    }
}
console.log(alimentos);
console.log(limpieza);
console.log(abarrotes);

// ================================================================
console.log('--------------------------------------------')
var suma = 0
console.log(list)

for (var i = 0; i < list.length; i++) {
    const producto = list[i];

    if (producto.departamento === 'Limpieza') {
        producto.precio = producto.precio - (producto.precio * .10)
    } else if (producto.departamento === 'Alimentos' && producto.cantidad > .6) {
        producto.precio = producto.precio - (producto.precio * .5)
    }


    suma = suma + producto.precio
}

if (suma > 300) {
    list.push({nombre: 'Regalo', precio: 0, departamento: 'Jueguetes', peso: 0})
    console.log('Se añadio un jugete gratis');
}
console.log(list)