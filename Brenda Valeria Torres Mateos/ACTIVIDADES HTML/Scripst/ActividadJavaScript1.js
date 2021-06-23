//Se crea variable

var _nombre = "Valeria Torres";
nombre (_nombre);

function nombre(_nombre)
{
    var nombre =  _nombre;
    console.log(nombre);
}


//No se crea variable

function saludo(name1)
{
    console.log("Hola "+ name1);
}

saludo("Valeria");

var comidasFavoritas = ["Spagueti verde con papas al horno", "Ensalada de pollo", "Sardinas"];
console.log("Mi comida favorita es: " + comidasFavoritas[0]);
console.log("Mi comida menos favorita es: " + comidasFavoritas[1]);

function Act4 ()
{
    var alumnos = [];
    alumnos [0] = {
        nombre: "Kevin",
        apellido: "Del Campo",
        edad: "25",
        sexo: "M",
    }

    alumnos [1] = {
        nombre: "Valeria",
        apellido: "Torres",
        edad: "22",
        sexo: "F",
    }

    alumnos [2] = {
        nombre: "Fabian",
        apellido: "Cruz",
        edad: "23",
        sexo: "M",
    }

    console.log(alumnos[0].nombre + " " + alumnos[0].apellido);
    console.log(alumnos[1].nombre + " " + alumnos[1].apellido);
    console.log(alumnos[2].nombre + " " + alumnos[2].apellido);
   
}
    
Act4 ();


