const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const PORT = 666;

const uri = "mongodb+srv://gasl:asdfghjklñ@cluster0.yfmf7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
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

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
//Crear un servidor WEB
app.use(express.static('./public'));

var routerUsers = require('./routers/users');
app.use('/users', routerUsers);
//localhost:666/users/...

var routerProducts = require('./routers/products');
app.use('/products', routerProducts);
//localhost:666/products/...

var routerCarts = require('./routers/carts');
app.use('/carts', routerCarts);

app.listen(PORT);