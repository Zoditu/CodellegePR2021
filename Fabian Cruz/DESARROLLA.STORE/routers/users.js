const express = require('express');

// Crear un enrutador para este micro-servicio
const router = express.Router();

//====================================================================================================
// Importar nuestro modelo de datos
const User = require('../models/user')

//  Importar modulo de validate
const Validate = require('../validation/validate');

// Importar el módulo de utilities
const Utils = require('../utils/utils');

//====================================================================================================
router.get('/all', async (req, res) => {

    var userIsAdmin = await Utils.isAdmin(req, res);
    if (!userIsAdmin) {
        return;
    };

    var users = await User.find({}, { __v: 0, _id: 0, password: 0 })

    res.send(users);
});

router.get('/getSession', async (req,res) => {
    const nickname =  req.cookies['SESSIONID'];
    var user = await User.findOne({
        nickname: nickname
    });

    if(user){
        return res.send({
            session: true
        });
    }
    res.clearCookie("SESSIONID");
    return res.send({
        session: false
    });
})

router.post('/register', async (req, res) => {
    // El parametro req
    var datosUsuario = req.body;

    // Validamos que la información necesaria se haya provisto de manera correcta
    const { error } = Validate.registration(datosUsuario);
    if (error) {
        return res.status(400).send({
            error: error.details[0].message
        })
    }

    // Or en el query de Mongo
    var userExists = await User.findOne({ $or: [{ nickname: datosUsuario.nickname }, { email: datosUsuario.email }]});
    if (userExists){
        return res.status(401).send({
            error: 'El usuario con este nickname/correo ya existe'
        });
    }

    var usuarioRegistrado = new User(datosUsuario);

    await usuarioRegistrado.save();
    res.send({
        message: 'Usuario registrado correctamente'
    });
});

// Router,metodo,endpoint,peticion y respuesta
router.get('/:nickname', async (req, res) => {

    var nickname = req.cookies['SESSIONID'];;

    var user = await User.findOne({ nickname: nickname }, { __v: 0, _id: 0, password: 0 })
    // findOne puede regresar null o el usuario
    if(!user) {
        // User no existe
        return res.status(404).send({
            message: 'El usuario: ' + nickname + ' no existe'
        })
    }
    return res.send(user);
})

router.put('/:nickname', async (req, res) => {
    const nickname = req.params.nickname;
    const usuarioActual =  req.cookies['SESSIONID'];
    const userData = req.body;


    if(nickname !== usuarioActual) {
        var userIsAdmin = await Utils.isAdmin(req, res);
        if(!userIsAdmin) {
            return;
        }
    }

    var user = await User.findOne({ nickname: nickname });
    if (!user) {
        //User no existe
        return res.status(404).send({
            message: 'El usuario: ' + nickname + ' no existe'
        });
    }

    // Los objetos en JS tambien se les conoce como Key-Values Pair
    // { key: value }

    var propiedades = Object.keys(userData);
    // Regresa un array [Strings]
    // ['name','OPOtraPropiedad]
    // Esto funcionara porque puedo acceder a una propiedad de un objeto
    // De manera tipo Hashing: userData['name'] => userData.name

    for (var i = 0; i < propiedades.length; i++) {
        const propiedad = propiedades[i];
        
        switch (propiedad) {
            case "name":
                user.name = userData.name;
                break;
            case "lastName":
                user.lastName = userData.lastName;
                break;
            case "phone":
                user.phone = userData.phone;
                break;
            case "password":
                user.password = userData.password;
                break;
            case "address":
                user.address = userData.address;
                break;
        }
    }

    await user.save();

    res.send({
        message: 'Se actualizo el usario correctamente'
    })
});

router.delete('/:nickname', async (req, res) => {

    var userIsAdmin = await Utils.isAdmin(req, res);
    if (!userisAdmin) {
        return;
    };

    var parametros = req.params;
    var nickname = parametros.nickname;

    var usuarioBorrado = await User.deleteOne({ nickname: nickname });

    res.send({
        message: 'Se ha borrado el usuario: ' + nickname
    });

});

//====================================================================================================
// Sesiones
//  Regularmente se mantienen a traves de cookies
router.post('/login', async (req, res) => {
    var datosLogin = req.body;

    // Validamos que la información necesaria se haya provisto de manera correcta
    const { error } = Validate.login(datosLogin);

    if (error) {
        return res.status(400).send({
            error: error.details[0].message
        });
    }

    if(!datosLogin.nickname && !datosLogin.name) {
        return res.status(403).send({
            error: "Necesita especificar un nickname o correo para iniciar sesion"
        });
    }

    var usuario = await User.findOne({ $or: [{ nickname: datosLogin.nickname }, { email: datosLogin.email }] });

    if(!usuario) {
        return res.status(404).send({
            error: "Datos incorrectos de inicio de sesion. Verifique el user/password"
        })
    }

    res.cookie('SESSIONID', usuario.nickname);
    res.send({
        message: 'Se ha iniciado sesión correctamente'
    });
});

router.post('/logout', async (req, res) => {
    res.clearCookie('SESSIONID');

    res.send({
        message: 'Se ha desloggeado y se ha borrado la sesión'
    });
});

//====================================================================================================
// Exportar o generar el modulo users.js
// Para ello debemos exportar aquello que contenga a toda la informacion
module.exports = router;