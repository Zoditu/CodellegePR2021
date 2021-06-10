const express = require('express');
const mongoose = require('mongoose');

var app = express();
app.use(express.json());
app.use(express.static('./public'));

const uri = "mongodb+srv://joseV:zxn3w100QWERTY@cluster0.fbjan.mongodb.net/Pruebas?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function(error){
    if(error){
        console.log('No se pudo conectar  a la base de datos de mongo');
    } else{
        console.log('Conectado a la base de datos');
        console.log('Conectado al servidor: ' + mongoose.connection.host);
        console.log('Conectado en el puerto: ' + mongoose.connection.port);
    }
});

app.use('/endpoint/:id', function(req, res){

    console.log('Params:');
    console.log(req.params);

    console.log('Body:');
    console.log(req.body);

    console.log('Query:');
    console.log(req.query);

    res.send('HOLA');
});






//USANDO TODAS LAS PROPIEDADES
// app.use('/Jose/:Appellido', function(req, res){

//     console.log('Params:');
//     console.log(req.params);

//     console.log('Body:');
//     console.log(req.body);

//     console.log('Query:');
//     console.log(req.query);

//     res.send('Se unsa el Params, Body y Query al mismo tiempo'),
//     {admin: true}
// });
 
const mapsRouter = require('./routers/maps');
app.use('/maps', mapsRouter);

const searchRouter = require('./routers/search');
app.use('/search', searchRouter);

const imagesRouter = require('./routers/images');
app.use('/images', imagesRouter);

const pruebasRouter = require('./routers/modelos');
app.use('/pruebas', pruebasRouter); 

app.listen(1010);