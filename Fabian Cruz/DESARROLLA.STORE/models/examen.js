const mongoose = require('mongoose');

module.exports = mongoose.model('Examen', new mongoose.Schema({
    calificacion: Number,
    nombreAlumno: String,
    preguntas: Array
}), 'Examenes');


function ActualizarDatos(modeloMongoose) {
    var nuevosDatos = datosNuevosModelo
    var propiedades = Object.keys(modeloMongoose);
    for (var i = 0; i < propiedades.length; i++) {
        const propiedad = propiedades[i];

        switch (propiedad) {
            case "nombreAlumno":
                modeloMongoose.nombreAlumno = nuevosDatos.nombreAlumno;
                break;
            case "calificacion":
                modeloMongoose.calificacion = nuevosDatos.calificacion;
                break;
            case "preguntas":
                modeloMongoose.preguntas = nuevosDatos.preguntas;
                break;
        }
    }
};