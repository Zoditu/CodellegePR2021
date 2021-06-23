const mongoose = require('mongoose');
const auto = mongoose.auto('Auto', new mongoose.Schema({
    marca: String,
    modelo: Number,
    Año: Number,
    hp: String,
    color: String,
    serie: Number,
}), 'Autos');

module.exports = auto;