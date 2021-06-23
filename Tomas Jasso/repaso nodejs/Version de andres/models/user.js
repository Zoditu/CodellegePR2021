const mongoose = require("mongoose");

//Generar nuestro propio módulo

module.exports = mongoose.model("User", new mongoose.Schema({
    nickname: String,
    name: String,
    lastName: String,
    email: String,
    password: String,
    portafolio: [{
        reqID: String
    }]
}), "Users");
