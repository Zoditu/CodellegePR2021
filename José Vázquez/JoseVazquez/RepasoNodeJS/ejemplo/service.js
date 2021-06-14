const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 888;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));

app.use('/global')

const routersUsers = require('./routers/users');
app.use('/users', routerUsers);

const routerPosts = require('./routers/users');
app.use('/posts', routerPosts);

console.log('Servidor iniciado...');
app.listen(PORT);