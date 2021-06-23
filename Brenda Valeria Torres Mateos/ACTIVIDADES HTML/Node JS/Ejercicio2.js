
var express = require("express");

const app = express();
app.use(express.static("../"));

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://valeriatorres:123456val@cluster0.bg3w5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true });

    client.connect(async error => {
  if(error) { 
      console.log("Ocurrio un error al intentar conectarse a Mongo: " + error);
      return;
  }

  console.log("Se ha conectado correctamente a la base de datos de Mongo");
  
  const cosas = client.db("Prueba").collection("Cosas");
  var numeros = [13, 67, 456, 123, 7567, 23, 34];
  
 /* for (var i = 0; i < numeros.length; i++) {
      const numero = numeros[i];
      cosas.insertOne({
        name: "Nuevo número",
        num: numero
      });
      
  }*/

  /*cosas.deleteMany({
      num: {$lte: 50 }
  });
  */

 /*
  var datos = await cosas.find().toArray();
 console.log(datos);

 var dato = await cosas.findOne({
     num: 456
 });
 console.log(dato);
 */

 cosas.updateOne({num: 456}, { $set: { name: "Esto se actualizó", num: 789} });
 cosas.updateMany({name: "Nuevo número"}, {$set: {name: "Viejo número"} });

  // perform actions on the collection object
  //client.close();
});


app.get("/products/all", (req, res) => {
    var productos = [{
            name: "iPhone 12 Pro Max",
            brand: "Apple",
            description: "The new 2020 iPhone 12, This Max Pro version has a better camera",
            image:"https://m.media-amazon.com/images/I/71LbB2+EOZL._AC_SX522_.jpg",
            price:1800.50,
            stock: 15
        },
        {
            name: "Mi 11",
            brand: "Xiaomi",
            description: "The new 2021 Xiaomi Mi 11",
            image:"https://img.gkbcdn.com/s3/p/2020-12-30/Xiaomi-Mi-11-5G-Smartphone-6-81-Inch-8GB-256GB-White-427118-0.jpg",
            price:800,
            stock: 17
        },
        {
            name: "Samsung Galaxy S21 Ultra",
            brand: "Samsung",
            description: "The new 2021 Galaxy S21",
            image:"https://cdn-files.kimovil.com/default/0005/63/thumb_462293_default_big.jpeg",
            price:1600,
            stock: 12
        },

    
    ];

    res.send(productos);
});

app.get("/html", (req, res) =>{
    res.send("<h1>Hola!</h1>")
}); 


console.log("Ejecutando el servicio en el puerto: 666");
console.log("Verificar las peticiones en el endpoint: http://localhost:666");

app.listen(666);









/*
app.get("/", (req, res) => {
    res.status(200).send("Hola, vengo de express :D");

});

app.get("/saludo", (req, res) => {
    res.status(200).send("Hola, este es un saludo");

});

app.post("/saludo", (req, res) => {
    res.status(200).send("Hola, esto CREA un saludo");

});
*/

