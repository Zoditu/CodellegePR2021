const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = 555
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
const Database = 'PetsAdopt';
const uri = "mongodb+srv://FabianCz:Zoom354242@cluster0.ngnxk.mongodb.net/" + Database + "?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, error => {
    if(error) {
        console.log('Error connecting to the database')
        console.log(error)
    } else {
        console.log('Succesfully connected to the mongo database server (Cluster');
        console.log('Server cluster: ' + mongoose.connection.host);
        console.log('Server cluster Port: ' + mongoose.connection.port);
    }
});

const routerPets = require('./routers/pets');
app.use('/pets', routerPets);

const routerUsers = require('./routers/users');
app.use('/users', routerUsers);

const routerRequest = require('./routers/requests');
app.use('/request', routerRequest);

const routerAppoint = require('./routers/appointments');
app.use('/appointments', routerAppoint);

console.log('Servidor iniciado');
app.listen(PORT)