var express = require("express");

const app =  express();

// function ProcesarPeticionGeneral(req, res{
//     res.status(200).send("Hola, vengo de express :O");
// });

// app.get("/", (req, res) => {
//     res.status(200).send("Hola, vengo de express uwu");
// });


// app.get("/saludo", (req, res) => {
//     res.status(200).send("Hola, esto es un saludo!");
// });

app.get("/productos/all", (req, res) => {
    res.status(200).send("Productos");
});

// app.post("/saludo", (req, res) => {
//     res.status(200).send("Hola, esto crea un saludo!");
// });

console.log("ejecutando el ejercicio en el puerto: 666");
console.log("Verificar las peticiones en el endpoint: http://localhost:666");

app.listen(666);

