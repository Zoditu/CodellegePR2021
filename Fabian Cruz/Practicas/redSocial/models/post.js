const mongoose = require('mongoose');

// mongoose.model(modelName, Schema, collection)
module.exports = mongoose.model('Post', new mongoose.Schema({
    postID: String,
    content: String,
}), 'Posts');