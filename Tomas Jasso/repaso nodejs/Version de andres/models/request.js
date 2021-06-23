const mongoose = require("mongoose");

//Generar nuestro propio módulo

module.exports = mongoose.model("Request", new mongoose.Schema({
    reqID: String,
    nickname: String,
    status: String,
    petID: String,
    dateAdopt: String
}), "Requests");
