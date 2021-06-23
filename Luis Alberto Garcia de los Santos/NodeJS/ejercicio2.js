var express = require('express');

const app = express();
app.use(express.static('../'));

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

console.log('Ejecutando el servicio en el puerto: 666');
console.log('Verificar las peticiones en el endpoint: http://localhost:666');
app.listen(666);