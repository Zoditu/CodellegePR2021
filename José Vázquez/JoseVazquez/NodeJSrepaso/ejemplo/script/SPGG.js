const alumnos = ["Mariell", "Luis", "Fabian", "Analucia", "Susana", "Andres"];
const periodoCurso = "Primavera 2021"
const maestros = ["Kevin KMCF", "Diego García", "Mariano M"];

function horario(){
    var lunes = {
        Día: "Lunes",
        Matería: "Código",
        Hora: "9:00 A.M. - 12:00 P.M."
    }
    var Martes = {
        Día: "Martes",
        Matería: "Código",
        Hora: "9:00 A.M. - 12:00 P.M."
    }
    var Miercoles = {
        Día: "Miercoles",
        Matería: "Código",
        Hora: "9:00 A.M. - 12:00 P.M."
    }
    var Jueves = {
        Día: "Jueves",
        Matería: "Código",
        Hora: "9:00 A.M. - 12:00 P.M."
    }
    var Viernes = {
        Día: "Viernes",
        Matería: "Código",
        Hora: "9:00 A.M. - 12:00 P.M."
    }
    var Viernes2 = {
        Día: "Viernes",
        Matería: "Código",
        Hora: "11:00 A.M. - 12:00 P.M."
    }
    var horario = [lunes, Martes, Miercoles, Jueves, Viernes, Viernes2]
    return horario
}

function añadirAlumno(alumnoNuevo){
    alumno.push()
}

function mensaje(){
    console.log('Todos los días se pone este mensaje')
}

var objetoFinal = {
    alumnos: alumnos,
    periodoCurso: periodoCurso,
    maestros: maestros,
    horario: horario,
    mensaje: mensaje
}
module.exports = objetoFinal

