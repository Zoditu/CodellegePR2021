var cumpleañeros = [
    {
        nombre: "Luis Garcia",
        fecha: "30/03/92",
        imagen: "images/luis.jpg",
        regalos: "chocolate",
        mostrardetalles: function(){
            console.log("Nombre: " + this.nombre);
            console.log("Cumple el: " + this.fecha);
            console.log("Le gustaria que le regalen: " + this.regalos);

        }
    },
    {
        nombre: "Kevin del Campo",
        fecha: "14/04/95",
        imagen: "images/kevin.jpg",
        regalos: "pastel de chocolate",
        mostrardetalles: function(){
        console.log("Nombre: " + this.nombre);
        console.log("Cumple el: " + this.fecha);
        console.log("Le gustaria que le regalen: " + this.regalos);
        }
    },
    {
        nombre: "Estellise Hohenhimmer",
        fecha: "01/04/90",
        imagen: "images/estellise.jpg",
        regalos: "flores",
        mostrardetalles: function(){
        console.log("Nombre: " + this.nombre);
        console.log("Cumple el: " + this.fecha);
        console.log("Le gustaria que le regalen: " + this.regalos);
        }
    },
];

cumpleañeros[0].mostrardetalles();
cumpleañeros[1].mostrardetalles();
cumpleañeros[2].mostrardetalles();


console.log(cumpleañeros);