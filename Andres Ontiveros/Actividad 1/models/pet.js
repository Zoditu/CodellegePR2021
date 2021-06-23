const mongoose = require("mongoose");

//Generar nuestro propio módulo

module.exports = mongoose.model("Pet", new mongoose.Schema({
    petID: String,
    name: String,
    type: String,
    age: Number,
    description: String
}), "Pets");

