const alumno = [
    {
        nombre: "José Vázquez"
    },
    {
        nombre: "José Vázquez"
    },
    {
        nombre: "José Vázquez"
    }
]

const periodoCurso = "Primavera 2021"

const maestro = [
    {
        maestro: "Kevin M.C."
    },
    {
        maestro: "Mariano"
    },
    {
        maestro: "Diego"
    }
]

function horario() {
    var lunes = {
        Día: "Lunes",
        Materia: "Código",
        Hora: "9:00-12:00"
    };
    var Martes = {
        Día: "Martes",
        Materia: "Código",
        Hora: "9:00-12:00"
    };
    var Miercoles = {
        Día: "Miercoles",
        Materia: "Código",
        Hora: "9:00-12:00"
    };
    var Jueves = {
        Día: "Jueves",
        Materia: "Código",
        Hora: "9:00-12:00"
    };
    var Viernes = {
        Día: "Viernes",
        Materia: "Código",
        Hora: "9:00-11:00"
    };
    var Viernes2 = {
        Día: "Viernes2",
        Materia: "Código",
        Hora: "11:00-12:00"
    }
    var horario = [Lunes, Martes, Miercoles, Jueves, Viernes, Viernes2];
    return horario
}

function añadirAlumno(alumnoNuevo){
    alumno.push(alumnoNuevo);
}   

function mensaje(){
    console.log("Todos los días ponemos este mensaje")
}


var objetoFinal = {
    alumnos: alumnos,
    periodoCurso: periodoCurso,
    maestros: maestros,
    horario: horario,
    mensaje: mensaje

}

module.esxports = objetoFinal
    
