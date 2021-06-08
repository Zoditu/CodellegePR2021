/* function MostrarMensaje (code,number,description){
    var mostrarMensaje = code+number+description
    return mostrarMensaje
}

var mostrarMensaje = MostrarMensaje("user-not-found: ","404 ","The requested user could not be found");
console.log(mostrarMensaje);

var code = "user-not-found: "
var number = "404 "
var description = "The requested user could not be found"
function MostrarMensaje (){
    var mensaje = code+number+description
    console.log(mensaje)
}
MostrarMensaje() */


/*  var Usuarios = {
    nombreUsuario: "Juan Andres",
    tipoUsuario: "regular",
    operación: "Mover"
};
if (Usuarios.tipoUsuario === "admin"){
    console.log("Permisos otorgados para: "+Usuarios.nombreUsuario);
}
else if (Usuarios.tipoUsuario === "colaborador"&&(Usuarios.operación === "Lectura" ||Usuarios.operación === "Edición"||Usuarios.operación === "Mover")){
    console.log("Permisos otorgados");
}
else if (Usuarios.tipoUsuario === "colaborador"&&(Usuarios.operación === "Creación" ||Usuarios.operación ==="Eliminar")){
    console.log("Permisos denegados para: " +Usuarios.nombreUsuario);
}
else if (Usuarios.tipoUsuario === "regular"&&Usuarios.operación === "Lectura"){
    console.log("Permisos otorgados para: " +Usuarios.nombreUsuario);
}
else if (Usuarios.tipoUsuario === "regular"&&(Usuarios.operación === "Edición" ||Usuarios.operación ==="Mover" ||Usuarios.operación ==="Creación" ||Usuarios.operación ==="Eliminar")){
    console.log("Permisos denegados para: " +Usuarios.nombreUsuario);
}  */

/* var numbers = [0,1,2,3,4,5,6,7,8,9]
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if(i % 2 === 0) {
        console.log("Numero: "+number+" es par")
      }
      else {
        console.log("Numero: "+number+" es impar")
      }
} */

/* var transacciónBancaria = {
númeroCuentaPaga: 12345,
númeroCuentaDestino: 54321,
dineroTransferido: 5000,
titularCuentaPaga: "Andres Ontiveros",
titularCuentaDestino: "Clara Ontiveros",
fechaOperacion: "15/04/2021",
horaOperación: "5pm"
} */

/* var compañias = [
    {
    nombreCompañia: "Motorola",
    paisOrigen: "China",
    modelosPrincipales: [{
        modelo1:"g5",
        modelo2:"x8"
    }]
    },
    {
    nombreCompañia: "Samsung",
    paisOrigen: "Mexico",
    modelosPrincipales: [{
        modelo1:"LGG",
        modelo2:"XRP"
    }]  
    }
] */

/* var Lista = ["A","B","C"];
Lista.push("D");
console.log(Lista)

var Lista = ["A","B","C"];
Lista[3] = "D"
console.log(Lista) */

var compañias = [{
        nombreCompañia: "Motorola",
        paisOrigen: "Estados Unidos",
        modelosPrincipales: [
            "g30",
            "g9",
            "One Fusion +",
            "edge +"
        ]
    },
    {
        nombreCompañia: "Samsung",
        paisOrigen: "Corea del Sur",
        modelosPrincipales: [
            "Galaxy S21 Ultra 5G",
            "Galaxy S21",
            "Galaxy S20 FE",
            "Galaxy Z Fold2"
        ]
    },
    {
        nombreCompañia: "Xiaomi",
        paisOrigen: "China",
        modelosPrincipales: [
            "Xiaomi Mi 10T Pro",
            "Xiaomi Mi Note 10 Lite",
            "Xiaomi Redmi Note 9 Pro",
            "Xiaomi Redmi Note 9"
        ]
    }
]
var Last = (compañias.length) - 1;
console.log("Nombre de la compañia: "+compañias[Last].nombreCompañia);
console.log("País: "+compañias[Last].paisOrigen);
console.log("Modelos:");
for (let i = 0; i < compañias[Last].modelosPrincipales.length; i++) {
    const modelo = compañias[Last].modelosPrincipales[i];
    console.log(modelo)
}

var Last = (compañias.length) - 1;
console.log("Nombre de la compañia: "+compañias[Last].nombreCompañia);
console.log("País: "+compañias[Last].paisOrigen);
console.log("Modelos: "+compañias[Last].modelosPrincipales);

/* function generarObjeto() {
    var objeto = {
    nombre: "Andres",
    apellidos: "Ontiveros Chairez",
    edad: "27 años"
    }
    return(objeto)
}

console.log(generarObjeto()); */

/* var express = require('express');

const app = express();
app.use(express.static('../'));

app.get("/hello",(req,res) =>{
    res.send("Hola");
});

console.log('Ejecutando en el puerto: 661');
console.log('Verificar las peticiones en el endpoint: http://localhost:661');
app.listen(661); */

/* var routerUsers = require("./utils.js");
app.use("/utils", routerUsers); 

function checkYear(año) {
    if(año>=1995){
        return("true")
    } 
    console.log("false");
}
console.log(checkYear(2000)); */

/* const cookieParser = require("cookie-parser");

app.use(cookieParser());

res.cookie("SPGG", desarrolla.software); */

/* switch (celular) {
    case "Apple":
        console.log("No dan cargador")
        break;
    case "Samsung":
        console.log("Tampoco dan cargador")
        break;

    case "Xiomi":
        console.log("Buena calidad a bajo precio")
        break;
    case 3:
        console.log(celular.Descripcion)
        break;
    default:
        console.log("No existe ese celular")
        break;
} */