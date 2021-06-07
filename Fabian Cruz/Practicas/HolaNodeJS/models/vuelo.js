const mongoose = require('mongoose');
const vuelo = mongoose.vuelo('Vuelo', new mongoose.Schema({
    aerolinea: String,
    fechaSalida: String,
    fechaRegreso: String,
    destinoSalida: String,
    destinoRegreso: String,
    numAsiento: String
}), 'Vuelos');

module.exports = vuelo;