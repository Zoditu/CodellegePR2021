var express = require('express');

const app = express (); 

function ProcesarPeticionGeneral (req, res) {
    //codigo de la funcion
    res.status (200) .send ('Hola, vengo de express');

}
// conect mongod 

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://MariellGzz:<password>@cluster0.0drkx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

//genera una app de express 

app.get('/', function(req, res){
    res.status(200) .send('Hola vengo de express'); 
});

app.get('/saludo', (req, res) => {
    res.status (200) .send('Hola, este es un saludo');
});

app.post('/saludo', (req, res) => {
    res.status (200) .send('Hola, esto CREA un saludo');
});

APP.GET ('PRODUCTS/ALL'),(req, res) => {
    var productos =[{
        //lista de productos
    }];

    res.send(productos); 

console.log ('Ejecutando el servicio en el puerto: 666');
console.log ('Verificar las peticiones en el endpoint: http://localhost666');
app.listen(666);

}

