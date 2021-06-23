const mongoose = require('mongoose');
const modelName = 'Appointment';
const collection = 'Appointments';
const schema = new mongoose.Schema({
    appointmentID: String,
    type: String,
    dateTime: String
});

var model = mongoose.model(modelName, schema, collection);
module.exports = model;