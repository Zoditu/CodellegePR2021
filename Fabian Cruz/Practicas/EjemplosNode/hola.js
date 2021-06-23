const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const PORT = 777;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
// importar el modulo del archivo users.js
const routerUsers = require('users');
//Enrrutador localhost:777/users
app.use('/users', routerUsers);

app.use(cookieParser());

console.log('Se inicio el server')

app.listen(PORT)