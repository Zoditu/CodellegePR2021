var express = require('express');

const app = express();
app.use(express.static('../'));

//Conexión al servidor de mongo (Atlas)
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://kmcf:spgg2021@cluster0.lh9dp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

client.connect(async error => {
    if(error) {
        console.log('Ocurrió un error al intentar conectarse a Mongo: ' + error);
        return;
    }

    console.log('Se ha conectado correctamente a la base de datos de Mongo');
    
    const cosas = client.db("Prueba").collection("cosas");
    var numeros = [13, 67, 456, 123, 7567, 23, 34];

    /*for (var i = 0; i < numeros.length; i++) {
        const numero = numeros[i];
        cosas.insertOne({
            name: "Nuevo número",
            num: numero
        });
    }*/

    //DELETE FROM cosas WHERE num <= 50
    /*cosas.deleteMany({
        num: { $lte: 50 }
        //$lte -> menor o igual
        //$gte -> mayor o igual
        //$lt -> menor
        //$gt -> mayor
        //$eq -> igual
        //$ne -> diferente
    });*/

    /*var datos = await cosas.find().toArray();
    console.log(datos);

    var dato = await cosas.findOne({
        num: 456
    });
    console.log(dato);
    */

    cosas.updateOne({ num: 456 }, { $set: { name: "Esto se actualizó", num: 678 } });
    cosas.updateMany({ name: "Nuevo número"}, {$set: { name: "Viejo número" } } );
    
    //Mongoose
});

app.get('/products/all', (req, res) => {
    var productos = [{
            name: "iPhone 12 Pro Max",
            brand: "Apple",
            description: "The new 2020 iPhone 12. This Max Pro version has a better camera",
            image: "https://images-na.ssl-images-amazon.com/images/I/71fJ-gmBZtL._AC_SX466_.jpg",
            price: 1800.50,
            stock: 15
        },
        {
            name: "Mi 11",
            brand: "Xiaomi",
            description: "The New 2021 Xiaomi Mi 11",
            image: "https://cdn.shopify.com/s/files/1/0512/1694/1248/products/CapturadePantalla2021-01-03ala_s_9.30.09_800x.png",
            price: 800,
            stock: 16
        },
        {
            name: "Samsung Galaxy S21 Ultra",
            brand: "Samsung",
            description: "The New 2021 Galaxy S21",
            image: "https://cdn-files.kimovil.com/default/0005/63/thumb_462293_default_big.jpeg",
            price: 1600,
            stock: 12
        }
    ];

    res.send(productos);
});

app.get('/html', (req, res) => {
    res.send('<h1>HOLA!</h1>');
});

console.log('Ejecutando el servicio en el puerto: 666');
console.log('Verificar las peticiones en el endpoint: http://localhost:666');
app.listen(666);