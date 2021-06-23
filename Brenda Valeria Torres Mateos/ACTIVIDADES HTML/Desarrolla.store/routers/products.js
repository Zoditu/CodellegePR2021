//Referencia del servidor de express
const express = require("express");

//Crear un enrutador para este micro-servicio
const router = express.Router();

//Importar nuestro modelo de datos
const Product = require("../models/product");

const Validate = require("../validation/validate");

const Utils = require("../utils/utils");

router.get("/all", async(req, res) => {
    var products = await Product.find({}, {
        _id: 0,
        __v: 0
    });
    res.send(products);
});

router.post("/new", async(req, res) =>{
    var userIsAdmin = await Utils.isAdmin(req, res);
    if(!userIsAdmin) {
        return;
    }
    
    var productData = req.body;

    const {error} = Validate.newProduct(productData);
    if(error) {
        return res.status(400).send({
            error: error.details[0].message
        });
    }

    var productExists = await Product.findOne({
        sku: productData.sku
    });

    if(productExists) {
        return res.status(401).send({
            error: "El producto con el SKU: " + productData.sku + " ya existe."
        });
    }

    var producto = new Product({
        sku: productData.sku,
        name: productData.name,
        description: productData.description,
        stock: productData.stock,
        price: productData.price,
    });

    await producto.save();

    res.send({
        message:"El producto se ha creado correctamente."
    });

});

function ToRegex( texto ) {

    var textoRegex = "";

    for (var i = 0; i < texto.length; i++) {
        const caracter = texto.charAt(i);
        if(caracter === " ") {
            textoRegex += ".*";
        } else{ 
            textoRegex += "[" + caracter.toUpperCase() + caracter.toLowerCase() + "]";
        }
         
    }
    return textoRegex;
}

router.get("/search", async (req, res) => {
    var query = req.query;
    var name = query.name;
    var price = query.price;
    var stock = query.stock;
    var category = query.category;

    var filtro = {};

    if(name) {
        filtro.name = {$regex: ToRegex(name)};
    }

    if(category) {
        filtro.category = {
            $regex: ToRegex(category)
        };
    }

    if(price) {
        var precios = price.split(",");
       
        if(precios.length >= 2) {
            var min = parseInt(precios[0]);
            var max = parseInt(precios[1]);

            min = isNaN(min) ? 0 : min;
            max = isNaN(max) ? 10000 : max;

            if (min > max) {
                var tempMax = max;
                max = min;
                min = tempMax;
            }
            filtro.price = {$gte: min, $lte: max}
        }

    }

    if(stock) {
        if(stock === "true") {
            filtro.stock = {$gte: 1};
        } else if (stock === "false"){
            filtro.stock = 0;
        }
    }

    var productos = await Product.find(filtro, {
        _id: 0,
        __v: 0 
    });

    res.send(productos);
});

router.get('/getFilters', async(req, res) => {

    var allCategories = await Product.find({}).distinct('category');

    var filters = {
        categories: allCategories
    };

    res.send(filters);
});

router.get("/:sku", async (req, res) =>{
    var sku = req.params.sku;

    var producto = await Product.findOne({ sku: sku }, 
        { _id: 0, __v: 0});
    
    if(!producto) {
        return res.status(404).send({
            message: "El producto identificado por el SKU: " + sku + " no existe"
        });
    }

    res.send(producto);

});

router.delete("/:sku", async (req, res) => {
    var userIsAdmin = await Utils.isAdmin(req, res);
    if(!userIsAdmin) {
        return;
    }

    var sku = req.params.sku;

    var productExists = await Product.findOne({ sku: sku},
    { _id: 0, __v: 0});

    if(!productExists) {
        return res.status(404).send({
            message: "El producto identificado por el SKU: " + sku + " no existe"
        });
    }

    await Product.deleteOne({ sku: sku });
    
    res.send({
        message: "Se ha borrado el producto " + sku
    });

});

router.put("/:sku", async (req, res) => {
    var userIsAdmin = await Utils.isAdmin(req, res);
    if(!userIsAdmin) {
        return;
    }
    
    var sku = req.params.sku;
    var productData = req.body;

    var producto = await Product.findOne({ sku: sku });

    if(!producto) {
        return res.status(404).send({
            message: "El producto identificado por el SKU: " + sku + " no existe"
        });
    }

    var propiedades = Object.keys(productData);

    for (var i = 0; i < propiedades.length; i++) {
        const propiedad = propiedades[i];

        switch(propiedad) {
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
            
            case "category":
                producto.category = productData.category;
                break;
            
        }

    
    }

await producto.save();

res.send({
    message: "Se ha actualizado el producto"
});

});



module.exports = router;