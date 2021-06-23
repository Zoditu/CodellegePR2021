const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const PORT = 777;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
//req.cookies["COOKIENAME"]
//req.cookie('COOKIENAME', 'VALOR')
//req.clearCookie('COOKIENAME')

//Importar el módulo del archivo users.js
const routerUsers = require('./users');
app.use('/users', routerUsers);
//localhost:777/users -> 
//localhost:777/users/all -> GET

console.log('Ejecutando el servidor...');

/*
//app es la aplicación de express...
app.post('/ejemplo/hola/:z', function(req, res) {
    //El req contiene:
    //Las cookies del usuario
    //El body de una petición
    //Los parámetros de una petición
    //El query de una petición

    var body = req.body; //Se usa en todo lo que no sea GET
    var query = req.query; //Se usa en GET
    var params = req.params;

    var x = body.x;
    var y = query.y;
    var z = params.z;

    //X: 1, Y: 2, Z: 3
    res.send("X: " + x + ", Y: " + y + ", Z: " + z);
});

app.get('/ejemplo/hola', function(req, res) {
    res.status(400).send('GET desde Express');
});

//Crear el endpoint /test que sea del tipo PATCH y regrese el mensaje: PATCH desde Express
app.patch('/test', function(req, res){
    res.send('PATCH desde Express');
});
*/

app.listen(PORT);