const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const PORT = 999;

const uri = "mongodb+srv://Andrez717:Bytheway7@cluster0.w4fbx.mongodb.net/Actividad1?retryWrites=true&w=majority";
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

var routerPets = require("./routers/pets");
app.use("/pets", routerPets);

var routerUsers = require("./routers/users");
app.use("/users", routerUsers);


var routerRequests = require("./routers/requests");
app.use("/requests", routerRequests);

var routerAppointments = require("./routers/appointments");
app.use("/appointments", routerAppointments);

app.listen(PORT);