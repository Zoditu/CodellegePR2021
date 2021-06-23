const mongoose = require("mongoose");

module.exports = mongoose.model("Product", new mongoose.Schema({
    sku: String,
    name: String,
    description: String,
    stock: Number,
    price: Number,
    images: Array
}), "Products");
