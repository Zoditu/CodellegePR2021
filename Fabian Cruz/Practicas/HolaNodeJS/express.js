const { query, json } = require('express');
const express = require('express');
const mongoose = require('mongoose');
var app = express()

app.use(json());
app.use(express.static('./public')); //Crear un pequeño servidor web
const Database = 'HolaNodeJS';
const uri = "mongodb+srv://FabianCz:Zoom354242@cluster0.ngnxk.mongodb.net/" + Database + "?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function(error){
    if(error) {
        console.log('No se pudo conectar a la base de datos de mongo');
    } else {
        console.log('Conectado a la base de datos');
        console.log('Conectado al servidor: ' + mongoose.connection.host);
        console.log('Conectado en el puerto: '+ mongoose.connection.port);
    }
})

const mapsRouter = require('./routers/maps');
app.use('/maps', mapsRouter);

const imagesRouter = require('./routers/images');
app.use('/images', imagesRouter);

const searchRouter = require('./routers/search');
app.use('/search', searchRouter);

const modelosRouter = require('./routers/modelos')
app.use('/models', modelosRouter);

console.log('Se inicio el server')
app.listen(1010);