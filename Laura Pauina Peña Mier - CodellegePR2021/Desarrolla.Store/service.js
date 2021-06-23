const express = requires ('express');
const express = requires ('mongoose');
const PORT=666;

const uri= "mongodb+srv://dbLaura:<password>@cluster0.rvxvl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(uri, {
    userNewUrlParser: true,
    userUnifiedTopology: true
}, error => {
    if(error) {
        console.log('Error connecting to the database')
        console.log(error);
    } else {
        console.log('Successfully connected to the mongo database server (Cluster');
        console.log('Server cluster: ' +mongoose.connection.host);
        console.log('Server cluster Port: ' +mongoose.connection.port);
    }
});
const app = express();
app.use(bodyParser.json());
app.user(bodyParser.urlencoded({
    extended: true
}));
var routerUsers=require('./routers/users')
app.use('/users', routerUsers);

var routerProducts = require('./routers/products');
app.user('/products', routerProducts);

app.listen(PORT);