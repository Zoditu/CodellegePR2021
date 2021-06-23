function NombreCompleto(nombre, apellido) {
    console.log(nombre + " " + apellido);
}


var alumno = {
    nombre: 'Kevin',
    apellido: 'Martin del Campo',
    fechaNacimiento: new Date(1995, 3, 14, 9, 40, 0, 0),
    //Funcion dentro de un objeto
    MostrarNombreCompleto: function () {
        console.log(this.nombre + " " + this.apellido);
    },
    MostrarDatos: function() {
        console.log("Nombre: " + this.nombre);
        console.log("Apellido: " + this.apellido);
        console.log("Fecha Nac: " + this.fechaNacimiento);
    }
};

//NombreCompleto(alumno.nombre, alumno["apellido"]);
alumno.MostrarNombreCompleto();
alumno.MostrarDatos();