const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const PORT = 666;

const uri = "mongodb+srv://spgg-paulina:K3N9zaDND7ZaXk8@cluster0.v0t6f.mongodb.net/SPGG?retryWrites=true&w=majority"
mongoose.connect(uri, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}, error => {
    if(error){
        console.log('Error connecting to the database');
        console.log(error);
    } else {
            console.log('Succesfully connected to the mongo database server (Cluster)');
            console.log('Server cluster:' + mongoose.connection.host);
            console.log ('Server cluster port:' + mongoose.connection.port);
        }
    
});
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(cookieParser());

var routerUsers = require('./Routers/users');
app.use('/users', routerUsers);

var routerProducts = require('./routers/products');
app.use('/products', routerProducts);

var routerCarts = require('./routers/carts');
app.use('/carts', routerCarts);

app.listen(PORT); 
