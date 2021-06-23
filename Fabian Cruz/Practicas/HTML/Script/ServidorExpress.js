var express = require('express');

const app = express();


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://FabianCz:Zoom354242@cluster0.ngnxk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(async err => {
    if(err) {
        console.log('Ocurrió un error al intentar conectarse a Mongo: ' + err);
        return;
    }

    console.log('Se ha conectado correctamente a la base de datos de Mongo');

    const cosas = client.db("Prueba").collection("cosas"); 
    var numeros = [13,24,25435,67,8,80,9,657];
    

    //Insertar datos
    // for (var i = 0; i < numeros.length; i++) {
    //     const numero = numeros[i];
    //     cosas.insertOne({
    //         name: 'Nuevo numero',
    //         num: numero
    //     });
    // }

    // cosas.deleteMany({
    //     num: {$lte: 50}
    //     // $lte -> menor o igual
    //     // $gte -> mayor o igual
    //     // $lt -> menor
    //     // $gt -> mayor
    //     // $e -> igual
    //     // $ne -> diferente
    // });
    

    // Buscar datos
    // var datos = await cosas.find().toArray();
    // console.log(datos);

    // var dato = await cosas.findOne({
    //     num: 657
    // });
    // console.log(dato);

    //Actualizar documento
    cosas.updateOne({num: 657}, {$set: {name: 'Esto se actualizó', num: 843}})
    cosas.updateMany({name: 'Nuevo numero'}, {$set: {name: 'Viejo Numero'}})

  // perform actions on the collection object
  // client.close();
});


// app.post('/saludo', (req,res) => {
app.use(express.static('../'));

app.get('/productos/all', (req, res) => {
    var productos = [
        {
            nombre: 'iPhone 12 Pro Max',
            marca: 'Apple',
            descripcion: 'The new 2020 iphone 12. This Max',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTee7kZtsyTtQtsNgfTxdRp94RbomfP9GvmxQ&usqp=CAU',
            price: 1800.50,
            stock: 15
        },
        {
            nombre: 'Mi 11',
            marca: 'Xiaomi',
            descripcion: 'The new 2020, Xiaomi 11',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGGlIzZ41rJuZoqD1I9nzA9H0DQCMMGkUPfyD6nERNg1vxKqujkXXsteuIkl43D-WUqBUzgBI&usqp=CAc',
            price: 800,
            stock: 17
        },
    ]

    res.send(productos);
})


console.log('Ejecutando el servicio en el puerto :666')
console.log('Verificar las peticiones en el endpoint: http://localhost:666');

app.listen(666);