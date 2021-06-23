const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const PORT = 666;

const uri = "mongodb+srv://Andrez717:Bytheway7@cluster0.w4fbx.mongodb.net/SPGG?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, error => {
    if (error) {
        console.log("Error conecting to the dabatase");
        console.log(error);
    } else {
        console.log("Succesfully connected to the Mongo db (Cluster)");
        console.log("Server cluster: " + mongoose.connection.host);
        console.log("Server cluster Port: " + mongoose.connection.port);
    }
});
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:4200",
credentials: true
}));

//Crer un servidor web
app.use(express.static("./public"));

var routerUsers = require("./routers/users");
app.use("/users", routerUsers);

var routerProducts = require("./routers/products");
app.use("/products", routerProducts);

var routerCarts = require("./routers/carts");
app.use("/carts", routerCarts);

var routerOrders = require('./routers/orders');
app.use('/orders', routerOrders);

app.listen(PORT);