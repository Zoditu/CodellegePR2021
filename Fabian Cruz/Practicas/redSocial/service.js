const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = 444;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
const Database = 'Repaso';
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

const routerUser = require('./routers/users');
app.use('/users', routerUser);

const routerPosts = require('./routers/posts');
app.use('/posts', routerPosts);

console.log('Se inicio el server');

app.listen(PORT);