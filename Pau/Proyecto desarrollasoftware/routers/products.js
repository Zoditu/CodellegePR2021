//Referencia del servidor de express
const express = require('express');
const product = require('../Models/product');
const Utils = require('../utils/utils');
//Crear un enrutador para este micro servicio
const router = express.Router();

//Importar nuestro modelo de datos
const Product = require('../Models/product');

//Importar el modulo de validate

const validate = require('../validation/validate');
// Endpoint para ver todos los productos
router.get('/all', async (req, res)=>{
    var productos = await Product.find({},{
        _id: 0,
        __v: 0 
    });
    res.send(productos);
});

function ToRegex (texto){
    var textoRegex = "";

    for (var i=0; i < texto.length; i++){
        const caracter = texto.charAt(i);
        if(caracter ===' '){
            textoRegex+=".*";
        } else {
            textoRegex +='[' + caracter.toUpperCase() + caracter.toLowerCase() + ']';
        }
    }
    return textoRegex;
}
//Endpoint para buscar producto
router.get('/search', async (req, res)=>{
    var query = req.query;
    var name = query.name; //?name=aspiradora
    var price = query.price; //?price=0,100
    var stock =query.stock; //?stock=true

    var filtro = {};

    if(name){
        filtro.name = { $regex: ToRegex(name)};
    }
    if(price){
        var precios = price.split(',');
        if(precios.length >=2){
            var min = parseInt(precios[0]);
            var max =parseInt(precios[1]);

            min= isNAN(min) ? 0 : min;
            max = isNAN(max) ? 1000: max; 

            if(min>max){
                var tempMax=max;
                max=min;
                min = tempMax;
            }
            filtro.price={ $gte: min, $lte: max}
        }
    }
    if(stock){
        if(stock === "true"){
            filtro.stock = {$gte: 1};
        } else if(stock==="false"){
            filtro.stock = 0;
        }
    }

    var productos = await Product.find(filtro, {
        _id:0, 
        __v:0
    });
    res.send(productos);
});
//Endpoint para registrar un producto nuevo
router.post('/new', async (req, res)=>{
    var userIsAdmin = await Utils.isAdmin(req, res);
    if(!userIsAdmin){
        return;
    }
    var productData = req.body;

    const {error} = validate.newProduct(productData);
    if(error){
        return res.status(404).send({
            error: error.details[0].message
        });
    }

    var productExists = await Product.findOne({
        sku: productData.sku
    });
   
   if(productExists){
       return res.status(401).send({
           error: 'El producto con el SKU '+ productData.sku+'ya existe'
       });
   }
   var producto = new Product({
    sku: productData.sku,
    name: productData.name,
    description: productData.description,
    stock:productData.stock,
    price: productData.price,
});
    await producto.save();
    res.send({
        message: "Producto registrado correctamente"
    });
});

// Endpoint para ver un producto en específico

router.get('/:sku', async (req, res)=>{
    var sku = req.params.sku;

    var producto = await Product.findOne({sku: sku}, {
        _id: 0,
        __v: 0 
    });
    if(!producto){
        return res.status(404).send({
            message: "El producto identificado por el SKU: "+sku+" no existe"
        });
    }
    res.send(producto);
});
// Endpoint para borrar un producto en específico
router.delete('/:sku', async (req, res)=>{
    var userIsAdmin = await Utils.isAdmin(req, res);
    if(!userIsAdmin){
        return;
    }
    var sku =req.params.sku;

    var productExists = await Product.findOne({sku:sku},{
        _id:0,
        __v:0
    });
    if(!productExists){
        return res.status(404).send({
            message:"El producto identificado por el SKU: "+sku+" no existe"
        });
    }
    await Product.deleteOne({sku:sku});
    res.send({
        message: "Se ha borrado el producto "+sku
    });
});

//Endpoint para actualizar un producto
router.put('/:sku', async (req, res)=>{
    var userIsAdmin = await Utils.isAdmin(req, res);
    if(!userIsAdmin){
        return;
    }
    var sku =req.params.sku;
    var productData = req.body;

    var producto = await Product.findOne({sku:sku});

    if(!producto){
        return res.status(404).send({
            message: "El producto identificado por el SKU: "+sku+" no existe"
        });
    }
    var propiedades=Object.keys(productData);

    for (var i=0; i < propiedades.length; i++){
        const propiedad = propiedades[i];
        switch(propiedad){
            case "name":
                producto.name = productData.name;
                break;

            case "description":
                producto.description = productData.description;
                break;

            case "stock":
                producto.stock = productData.stock;
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
        message:"Se ha actualizado el producto"
    });
});


//Exportar o generar el module User.js
//Para ello tenemos que exportar todo aquello que tenga la información
module.exports = router;