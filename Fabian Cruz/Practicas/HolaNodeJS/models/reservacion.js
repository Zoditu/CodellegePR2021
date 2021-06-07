const mongoose = require('mongoose');
const reservacion = mongoose.reservacion('Reservacion', new mongoose.Schema({
    nombre: String,
    fechaEntrada: String,
    fechaSalida: String,
    numHabitacion: Number,
    personaReserva: String
}), 'Reservaciones');

module.exports = reservacion;