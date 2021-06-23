const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const PORT = 777;

const uri = "mongodb+srv://jasso65:jassormz.65@cluster0.rllc7.mongodb.net/test";
mongoose.connect(uri, {
    useNewUrlParser: true,
    usedUnifiedTopology: true
}, error => {
    if (error) {
        console.log("No se pudo conectar con la base de datos");
        console.log(error);
    } else {
        console.log("Conectado exitosamente al cluster Mongo db");
        console.log("Server cluster: " + mongoose.connection.host);
        console.log("Server cluster port: " + mongoose.connection.port);

    }
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cookieParser());

var routerPets = require("./routers/pets");
app.use("/pets", routerPets);

var routerUsers = require("./routers/users");
app.use("/users", routerUsers);


var routerRequests = require("./routers/requests");
app.use("/requests", routerRequests);

var routerAppointments = require("./routers/appointments");
app.use("/appointments", routerAppointments);

app.listen(PORT);