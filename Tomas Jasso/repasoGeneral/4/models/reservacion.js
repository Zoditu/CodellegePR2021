const model = mongoose.model('Hotel', new mongoose.Schema({
    nombre: String,
    fechaEntrada: Date,
    fechaSalida: Date,
    numHabitacion: String,
    personaReserva: String,
}),'Hoteles');

module.exports = model;