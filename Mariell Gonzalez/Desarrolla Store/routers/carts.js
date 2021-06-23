//Referencia del servidor de express
const express = require('express');

//Crear un enrutador para este micro-servicio
const router = express.Router();

//Importar el esquema de datos de un Cart
const Cart = require('../models/cart');

//Importar el esquema de datos de un User
const User = require('../models/user');

//Importar el módulo de utilities
const Utils = require('../utils/utils');

//Importar el esquema de datos de un Product
const Product = require ('../utils/utils');

//Endpoint del tipo GET, que se llame getCart
//Debe revisar si existe una cookie con el ID de un carrito (La cookie se llama CARTID)
//Si existe, buscarlo en la BDD y regresarlo, si no, crear uno nuevo con ese ID en la BDD y regresarlo
router.get('/getCart', async (req, res) =>{
    var cartID = req.cookies["CARTID"];
    var session = req.cookies["SESSIONID"];
    var userCart = null;
    var user = null;

    if(session) {
        user = await User.findOne({ nickname: session });
        if(user) {
            userCart = await Cart.findOne({ id: user.cartID }, {
                _id: 0,
                __v: 0
            });
        }
    }
    
    if(cartID) {
        var carrito = await Cart.findOne({ id: cartID }, {
            _id: 0,
            __v: 0
        });

        if(carrito) {
            if(userCart) {
                //Fusionar carritos
                if(userCart.id !== cartID) {
                    //Fusión de productos
                    res.cookie('CARTID', userCart.id, {
                        expires: new Date(2025, 1, 1)
                    });

                    return res.send(userCart);
                }
            }

            return res.send(carrito);
        } else if(user && userCart) {
            res.cookie('CARTID', userCart.id, {
                expires: new Date(2025, 1, 1)
            });

            return res.send(userCart);
        }
    } else {
        if(user && userCart) {
            res.cookie('CARTID', userCart.id, {
                expires: new Date(2025, 1, 1)
            });
            return res.send(userCart);
        }

        cartID = Utils.genCartID();
        res.cookie('CARTID', cartID, {
            expires: new Date(2025, 1, 1)
        });
    }

    carrito = new Cart({
        id: cartID,
        products: [],
        quantity: 0,
        total: 0
    });

    await carrito.save();

    if(user && !userCart) {
        user.cartID = cartID;
        await user.save();
    }

    res.send(carrito);

});

//Endpont del tipo PUT para ver un carrito en especifico 
// Se lalamará viewCart 
//Debe recibir de body {cartID "12345"}
//Debe regresar el carrito con ese id, si no regresar un mensaje que diga:
//El carrito XYZ no existe. 
//Utilice getCart para generar uno... 
router.put ('/viewCart', async (req, res) => {
    const cartID = req.body.cartID;
    var cart =await Cart.findOne ({ id: cartID}, {
        _id:0,
        __v:0

    });

    if(cart) {
        return res.send (cart);

    }

    res.status (404).send ({
        error: "El carrito: " + cartID + " no existe "

    });
});

//Endpoint del tipo PATCH para añadir / actualiar productos 
/**
 * para añadir un producto, necesitamos mandar el ID del producto
 * buscamos ese producto en la BDD y si se encuentra el producto, 
 * mandamos la info a través del body: {productoID: 12345, qty: 1}
 * los productos nuevos se añaden en el Cart.product ...es un array que tiene cada carrito de la BDD
 * tecuerden que debe recuperar el carrito de la cookie
 * los producto que ya existen, añadir a su cantidad el wty que tiene
 * todo esto afecta al Cart ... tanto en total, quantity, basado en el products... 
 */

//Endpoint para añadir productos 
//Endpoint que actualice los productos 

//Endpoint para validar un carrito del carrito --> actualizar 

//Endpoint para eliminar un producto 

//Exportar o generar el módulo carts.js
//Para ello debemos exportar aquello que contenga a todo la información
module.exports = router;