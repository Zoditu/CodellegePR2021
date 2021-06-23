const mongoose = require("mongoose");

module.exports = mongoose.model("Usuario", new mongoose.Schema({
    username: String,
    name: String,
    lastName: String,
    email: String,
    password: String,
    portafolio: [{
        reqID: String
    }]
}), "Usuario");
