const mongoose = require("mongoose");
const { type } = require("node:os");

//Generar nuestro propio módulo

module.exports = mongoose.model("Appointment", new mongoose.Schema({
    appointID: String,
    type: String,
    dateTime: Date
}), "Appointments");

