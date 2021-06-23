const mongoose = require('mongoose');
const modelName = 'User';
const collection = 'Users';
const schema = new mongoose.Schema({
    UserID: String,
    name: String,
    lastName: String,
    email: String,
    password: String,
    portafolio: [{ reqID }]
});

var model = mongoose.model(modelName, schema, collection);
module.exports = model;