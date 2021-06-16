const mongoose = require('mongoose');

// mongoose.model(modelName, Schema, collection)
module.exports = mongoose.model('User', new mongoose.Schema({
    nickname: String,
    name: String,
    lastName: String,
}), 'Users');