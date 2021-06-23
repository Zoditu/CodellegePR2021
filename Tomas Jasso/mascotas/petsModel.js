const mongoose = require('mongoose');
const modelName = 'Pets';
const collection = 'Pets';
const schema = new mongoose.Schema({
    postID: String,
    content: String
});

var model = mongoose.model(modelName, schema, collection);
module.exports = model;