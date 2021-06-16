const alumnos = ["Fabian, ", "Guadalupe, ", "Laura, ", "Tomas, "];
const periodo = "Febrero-Junio";
const maestros = ["Kevin"];

function horario() {
    var lunes = {
        Dia: "Lunes", 
        Materia: "Codigo",
        Hora: "9:00-12:00"    
    };

    var martes = {
        Dia: "Martes", 
        Materia: "Codigo",
        Hora: "9:00-12:00"    
    };

    var miercoles = {
        Dia: "Miercoles", 
        Materia: "Codigo",
        Hora: "9:00-12:00"    
    };

    var jueves = {
        Dia: "Jueves", 
        Materia: "Codigo",
        Hora: "9:00-12:00"    
    };

    var viernes = {
        Dia: "Viernes", 
        Materia: "Codigo",
        Hora: "9:00-11:00"    
    };

    var viernes2 = {
        Dia: "Viernes", 
        Materia: "Desarollo personal",
        Hora: "11:00-12:00"    
    };

    var horario = [lunes, martes, miercoles, jueves, viernes, viernes2]

    return  horario
}

function nuevoAlumno(alumnoNuevo) {
    alumnos.push(alumnoNuevo);
}

function mensaje() {
    console.log("Todos los dias ponemos este mensaje");
}

var objetofinal = {
    alumnos: alumnos,
    periodo: periodo,
    maestros: maestros,
    horario: horario,
    mensaje: mensaje
}

module.exports = objetofinal