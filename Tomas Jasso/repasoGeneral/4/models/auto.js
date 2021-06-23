const model = mongoose.model('Auto', new mongoose.Schema({
    marca: String,
    modelo: String,
    año: Number,
    hp: Number,
    color: String,
    serie: String,
}),'Autos');

module.exports = model;