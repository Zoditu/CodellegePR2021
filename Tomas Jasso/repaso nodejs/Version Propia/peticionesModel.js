const mongoose = require("mongoose");

module.exports = mongoose.model("Petición", new mongoose.Schema({
    reqID: String,
    username: String,
    status: String,
    petID: String,
    dateAdopt: Date
}), "Petición");