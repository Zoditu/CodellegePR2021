// Importar nuestro modelo de datos
const User = require('../models/user');
const Cart = require('../models/cart');
const Product = require('../models/product');

module.exports = {
    isAdmin: async function( req, res ) {
        //  Extrae la cookie SESSIONID
        var sessionID = req.cookies['SESSIONID'];
        
        var user = await User.findOne({ nickname: sessionID });
        if(user.userType === 'admin'){
            return true;
        }

        res.status(403).send({
            error: 'El usuario no tiene privilegios para realizar esta operación'
        });
        return false;
    },
    genOrderID: function(){
        return Date.now();
    },

    genCartID: function(){
        var epoch = Date.now() + '' +  Date.now() + '' +  Date.now() + '';
        epoch = Buffer.from(epoch).toString('base64')
        return epoch;
    },

    validateCart: async (carrito) => {
        // var cartID = req.cookies["CARTID"];
        // var carrito = await Cart.findOne({
        //     id: cartID
        // });
        
        var cart_issues = [];
    
        for (var i = 0; i < carrito.products.length; i++) {
            const product = carrito.products[i];
    
            // COmprobar que el producto existe... No se puede comprar algo que ya se quitó
            var productDB = await Product.findOne({
                sku: product.sku
            })
    
            // No encontró el producto en la DB. Lo eliminamos
            if (!productDB) {
                cart_issues.push({
                    product: {
                        sku: product.sku,
                        name: product.name
                    },
                    issue: "Este producto ha sido dado de baja del catálogo"
                });
                // Elimina el elemento apartir de la posicion i, y lo va a hacer nveces
                carrito.products.splice(i, 1);
                i--;
                continue;
            } else {
                if (productDB.stock <= 0) {
                    cart_issues.push({
                        product: {
                            sku: product.sku,
                            name: product.name
                        },
                        issue: "Este producto no tiene stock por el momento"
                    });
                    carrito.products.splice(i, 1);
                    i--;
                    continue;
                } else if(productDB.stock < product.qty) {
                    cart_issues.push({
                        product: {
                            sku: product.sku,
                            name: product.name
                        },
                        issue: "Este producto no tiene suficiente stock. Se le ha modificado al maximo existente por el momento"
                    });                
                }
            }
            product.name = productDB.name;
            product.description = productDB.description;
            product.unit_price = productDB.price;
            product.images = productDB.images;
        }
    
        carrito.quantity = 0;
        carrito.total = 0;
        for (var i = 0; i < carrito.products.length; i++) {
            const product = carrito.products[i];
            carrito.quantity += product.qty;
            carrito.total += product.qty * product.unit_price;
    
        }
    
        carrito.markModified('products');
        await carrito.save();
    
        return { cart: carrito, cart_issues: cart_issues };
    }
};