const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const PORT = 999;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cookieParser());

const routerUsers = require('./users');
app.use('/users', routerUsers);

app.post('/ejemplo/hola/:z', function (req, res){

    var body = req.body;
    var query = req.query;
    var params = req.params;
    var x = body.x;
    var y = query.y;
    var z = params.z; 

    res.send('X:' + x  + ', Y:' + y  + ', Z:' + z);
});

app.put('/ejemplo/hola', function (req, res){
    res.status(405).send('PUTHola desde express');
});

app.delete('/ejemplo/hola', function (req, res){
    res.status(406).send('DELETEHola desde express');
});

app.unlock('/ejemplo/hola', function (req, res){
    res.status(407).send('UNLOCKHola desde express');
});

console.log('Ejecutando el servidor');

app.listen(PORT);