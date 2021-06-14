const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
PORT = 111;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));   

const Database = 'Repaso';
const uri = "mongodb+srv://joseV:zxn3w100QWERTY@cluster0.fbjan.mongodb.net/" + Database + "?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, error => {
    if(error) {
        console.log('Error connecting to the database');
        console.log(error);
    } else {
        console.log('Succesfully connected to the mongo database server (Cluster)');
        console.log('Server cluster: ' + mongoose.connection.host);
        console.log('Server cluster Port: ' + mongoose.connection.port);
    }
});

const routerUsers = require('./routers/users');
app.use('/users', routerUsers);

const routerPosts = require('./routers/posts');
app.use('/posts', routerPosts);

console.log('Servidor iniciado XD');
app.listen(PORT);

