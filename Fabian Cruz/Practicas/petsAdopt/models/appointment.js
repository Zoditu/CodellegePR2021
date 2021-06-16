const mongoose = require('mongoose');

module.exports = mongoose.model('Appointment', mongoose.Schema({
    appointID: String,
    nickname: String,
    type: String,
    cita: String,
    visita: String,
    dateTime: Date
}), 'Appointments');

