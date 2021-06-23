const mongoose = require('mongoose');

module.exports = mongoose.model('Pet', new mongoose.Schema({
    petID: String,
    name: String,
    type: String,
    age: Number,
    description: String,
}), 'Pets');