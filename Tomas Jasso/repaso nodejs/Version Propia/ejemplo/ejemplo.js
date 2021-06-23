const express = require('express');
const bodyParser = require('body-parser');
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

// console.log('Todo salio bien!');


// app.post('/ejemplo/hola/:z', function(req, res) {
//     /*El req contiene:
//     Las cookies del usuario
//     El body de una peticion
//     Los parametros de una peticion
//     El query de una peticion*/
    
//     var body = req.body;
//     var query = req.query;
//     var params = req.params;

//     //X: 1, Y: 2, Z: 3
//     res.send("X: " + x + ", Y: " + y + ", Z: " + z);

// });


// //app es la aplicacion de express
// // app.post('/ejemplo/hola', function(req, res) {
// //     res.send('POST desde Express');
// // });

// app.get('/ejemplo/hola', function(req, res) {
//     res.status(400).send('GET desde Express');
// });


// /* app.use('/ejemplo/test', function(req, res) {
//      res.send('Prueba desde Express');
//  }); */

// //crear el endpoint /test que sea del tipo patch
// app.patch('/test', function(req, res){
//     res.send('PATCH desde Express');
// });



//IMPORTAR EL MODULO DEL ARCHIVO USERS.JS
const routerUsers = require('./users');
const cookieParser = require('cookie-parser');
app.use('/users', routerUsers);
//localhost:777/users


console.log('Ejecutando el servidor...');

app.listen(PORT);