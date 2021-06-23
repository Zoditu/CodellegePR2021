const mongoose = require("mongoose");
const {type} = require("node:os");
const { stringify } = require("node:querystring");

module.exports = mongoose.model("Cita", new mongoose.Schema({
    appointID: String,
    type: String,
    dateTime: Date
}), "Cita");