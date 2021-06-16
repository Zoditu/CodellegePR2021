const express = require('express');

// Crear un enrutador para este micro-servicio
const router = express.Router();
//====================================================================================================

// Importar nuestro modelo de datos
const Product = require('../models/product')

//  Importar modulo de validate
const Validate = require('../validation/validate');

// Importar el módulo de utilities
const Utils = require('../utils/utils');

// ===================================================================================================

//Enddpoint para ver todos los productos
router.get('/all', async (req, res) => {
    var products = await Product.find({}, {__v: 0, _id: 0})

    res.send(products)
})

//Endpoint para crear un producto
router.post('/new', async (req, res) => {

    var userIsAdmin = await Utils.isAdmin(req, res);
    if (!userIsAdmin) {
        return;
    };

    var newProduct = req.body;

    // Validamos que la información necesaria se haya provisto de manera correcta
    const { error } = Validate.newProduct(newProduct);
    if (error) {
        return res.status(400).send({
            error: error.details[0].message
        })
    }

    var productExist = await Product.findOne({ $or: [{ sku: newProduct.sku }, { name: newProduct.name}]});
    if (productExist){
        return res.status(401).send({
            error: 'El producto con este sku/name ya existe'
        });
    }

    var productRegistrado = new Product({
        sku: newProduct.sku,
        name: newProduct.name,
        descripcion: newProduct.descripcion,
        stock: newProduct.stock,
        price: newProduct.price,
        images: newProduct.images
    })

    await productRegistrado.save();
    res.send({
        message: 'Producto registrado correctamente'
    });
})

function ToRegex(texto){

    var textoRegex = '';

    for (var i = 0; i < texto.length; i++) {
        const caracter = texto.charAt(i);
        if(caracter === ' ') {
            textoRegex += ".*";
        } else {
            textoRegex += '[' + caracter.toUpperCase() + caracter.toLowerCase() + ']';
        }
    }
    return textoRegex;
}

// Endpoint para buscar productos
router.get('/search', async (req, res) => {
    var query = req.query;

    var name = query.name; //?name=producto1
    var price = query.price; //?price=0,100
    var stock = query.stock; //?stock=true

    var filtro = {};

    if(name) {
        filtro.name = { $regex: ToRegex(name) }
    }

    if(price) {
        var precios = price.split(',');
            // 0,1 - 0 0 0,1,2
            // ["0", "1"]
            // []
            // ["0", "1,2"]
        
        if(precios.length >= 2) {
           var min = parseInt(precios[0]);
           var max = parseInt(precios[1]);

           min = isNaN(min) ? 0 : min; // operador ternario = ?:
           max = isNaN(max) ? 1000 : max;

           if(min > max) {
            //Swap Value
               var tempMax = max;
               max = min;
               min = tempMax
           }
           filtro.price = { $gte: min, $lte: max }
        }
    }

    if(stock) {
        if(stock == 'true') {
            filtro.stock = { $gte: 1};
        } else if(stock === 'false') {
            filtro.stock = 0;
        }
    }

    var productos = await Product.find(filtro, {
        _id:0,
        __v: 0
    });

    res.send(productos)
})

// Endpoint para buscar un sku
router.get('/:sku', async (req, res) => {
    var sku = req.params.sku;

    var producto = await Product.findOne({ sku: sku }, {
        _id: 0,
        __v: 0,
    });

    if (!producto) {
        return res.status(404).send({
            message: 'El produco identificado por el SKU: ' + sku + ' no existe'
        });
    }

    res.send(producto);
});

// Endpoint para actualizar un sku
router.put('/:sku', async (req, res) => {

    var userIsAdmin = await Utils.isAdmin(req, res);
    if (!userIsAdmin) {
        return;
    };

    var sku = req.params.sku;
    var productData = req.body

    var producto = await Product.findOne({ sku: sku });
    if (!producto) {
        return res.status(404).send({
            message: 'El produco identificado por el SKU: ' + sku + ' no existe'
        });
    }

    var propiedades = Object.keys(productData);
    for (var i = 0; i < propiedades.length; i++) {
        const propiedad = propiedades[i];
        
        switch (propiedad) {
            case "name":
                producto.name = productData.name;
                break;
            case "descripcion":
                producto.descripcion = productData.descripcion;
                break;
            case "stock":
                productostock = productData.stock;
                break;
            case "price":
                producto.price = productData.price;
                break;
            case "images":
                producto.images = productData.images;
                break;
        }
    }

    await producto.save();

    res.send({
        message: 'Se actualizo el producto correctamente'
    })
})

// Endpoint para eliminar un sku
router.delete('/:sku', async (req, res) => {

    var userIsAdmin = await Utils.isAdmin(req, res);
    if (!userisAdmin) {
        return;
    };

    var sku = req.params.sku;
    var productExist = await Product.findOne({ sku:sku }, {
        _id: 0,
        __v: 0
    });

    if(!productExist) {
        return res.status(404).send({
            message: 'El produco identificado por el SKU: ' + sku + ' no existe'
        })
    }

    await Product.deleteOne({ sku:sku });
    res.send({
        message: 'Se ha borrado el producto: ' + sku
    });
});

//=====================================================================================================
// Exportar o generar el modulo users.js
// Para ello debemos exportar aquello que contenga a toda la informacion
module.exports = router;