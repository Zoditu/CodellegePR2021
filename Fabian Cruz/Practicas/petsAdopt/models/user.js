const mongoose = require('mongoose');
const appointment = require('./appointment');

module.exports = mongoose.model('User', new mongoose.Schema({
    nickname: String,
    name: String,
    lastName: String,
    email: String,
    password: String,
    portafolio: {
        reqID: String
    },
    appointments: {
        appointID: String,
        visitID: String
    }
}), 'Users');