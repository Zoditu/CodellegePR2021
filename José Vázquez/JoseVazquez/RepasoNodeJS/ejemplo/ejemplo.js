const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const PORT = 777;
const app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
const routerUsers = require('./users');
app.use('/users', routerUsers);


//app es la aplicación de express...

console.log('Ejecutando el servidor...');

app.listen(PORT);