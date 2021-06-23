console.log("Tomas Israel Jasso");
//--------------------------------------------------------------------- 1
function Saludar(name) {
    console.log("Hola, " + name )
}
Saludar("Tomas Jasso")

//---------------------------------------------------------------------- 2

var comidas = ["Chiles en nogada", "Pollo con crema", "Nopales"];
console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);

console.log("Mi comida favorita es: " + comidas[0] + " y la que menos me gusta es: " + comidas[1]);

//----------------------------------------------------------------------- 3



function act4() {
    var alumnos = [];
    alumnos[0] = {
        nombre: "Tomas Israel",
        apellido: "Jasso Ramirez",
        edad: "21",
        sexo: "Masculino"
    };
    alumnos[1] = {
        nombre: "Marcelo",
        apellido: "Acevedo",
        edad: "20",
        sexo: "Masculino"
    };
    alumnos[2] = {
        nombre: "Ernesto",
        apellido: "Sanchez Villadiego",
        edad: "20",
        sexo: "Masculino"
    };
    console.log("Nombre completo: " + alumnos[0].nombre + " " + alumnos[0].apellido);
    console.log("Nombre completo: " + alumnos[1].nombre + " " + alumnos[1].apellido);
    console.log("Nombre completo: " + alumnos[2].nombre + " " + alumnos[2].apellido);
}

act4()
//----------------------------------------------------------------------- 4