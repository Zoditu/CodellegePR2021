const mongoose = require('mongoose');

// Crear nuestro propio modulo
// Para generar un modulo se necesitan 3 cosas, nombre de modelo, collection y mongoose
module.exports = mongoose.model('User', new mongoose.Schema({
    nickname: String,
    name: String,
    lastName: String,
    address: {
        street: String,
        suburb: String,
        city: String,
        state: String,
        zip: Number
    },
    email: String,
    password: String,
    phone: Number,
    userType: String,
    cartID: String
}),'Users');