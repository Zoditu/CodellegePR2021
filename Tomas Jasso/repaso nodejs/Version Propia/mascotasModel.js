const mongoose = require("mongoose");

module.exports = mongoose.model("Mascota", new mongoose.Schema({
    petID: String,
    name: String,
    type: String,
    age: Number,
    description: String
}), "Mascota");