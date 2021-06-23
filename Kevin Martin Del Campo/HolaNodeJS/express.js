//Importar express
const express = require('express');
const mongoose = require('mongoose');

//Para crear una app de express:
const app = express();
app.use(express.json());
app.use(express.static('./public')); //Crear un pequeño servidor web

const uri = "mongodb+srv://kmcf:spgg2021@cluster0.lh9dp.mongodb.net/Pruebas?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function(error){
    if(error) {
        console.log('No se pudo conectar a la base de datos de mongo');
    } else {
        console.log('Conectado a la base de datos');
        console.log('Conectado al servidor: ' + mongoose.connection.host);
        console.log('Conectado en el puerto: ' + mongoose.connection.port);
    }
});


//Creamor un endpoint genérico de express /endpoint. No especifica método (GET, PUT, POST, etc.)
app.use('/endpoint/:nombre', function(req, res){
    //req: Es el parámetro que representa la petición, o sea, información del cliente
    //req.params: Parámetros dinámicos de petición
        //Ex: http://localhost:1010/endpoint/Este es un params
    //req.body: Cuerpo de la petición, múltiples datos
        //Ex: Es común tenerlo solo en lo que no sea GET
        //body: { algo: valor, algo2: valor2, etc... }
    //req.query: Un query, una búsqueda visible en la URL
        //Ex: http://localhost:1010/endpoint?variable=valor&variable2=valor2
    console.log('Params:');
    console.log(req.params); //req.params.nombre

    console.log('Body:');
    console.log(req.body); //req.body.NombreCompleto

    console.log('Query:');
    console.log(req.query); //req.query.variable

    //res: Es el parámetro que controla la respuesta/interacción con el cliente
    res.send('Hola!');
});

const mapsRouter = require('./routers/maps');
app.use('/maps', mapsRouter);

const searchRouter = require('./routers/search');
app.use('/search', searchRouter);

const imagesRouter = require('./routers/images');
app.use('/images', imagesRouter);

const pruebasRouter = require('./routers/modelos');
app.use('/pruebas', pruebasRouter);

//Inicia el servicio en el puesto especificado (1010, 1234, etc.)
app.listen(1010);