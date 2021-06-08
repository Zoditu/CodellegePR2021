const mongoose = require('mongoose');
const modelName = 'Request';
const collection = 'Requests';
const schema = new mongoose.Schema({
    requestID: String,
    nickname: String,
    status: String,
    petID: String,
    dateAdopt: String
});

var model = mongoose.model(modelName, schema, collection);
module.exports = model;