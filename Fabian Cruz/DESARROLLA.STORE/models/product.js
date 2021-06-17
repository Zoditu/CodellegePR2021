const mongoose = require('mongoose');

// Crear nuestro propio modulo
// Para generar un modulo se necesitan 3 cosas, nombre de modelo, collection y mongoose
module.exports = mongoose.model('Product', new mongoose.Schema({
    sku: String,
    name: String,
    descripcion: String,
    stock: Number,
    price: Number,
    category: String,
    images: Array
}),'Products');