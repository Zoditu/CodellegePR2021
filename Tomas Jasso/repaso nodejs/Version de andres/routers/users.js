//Referencia del servidor de express
const express = require("express");

//Crea un enrutador para este micro-servicio
const router = express.Router();

//Importar nuestro modelo de datos
const User = require("../models/user");
const Request = require("../models/request");

router.get("/all", async (req, res) => {

    var users = await User.find({}, {
        __v: 0,
        _id: 0
    });

    res.send(users);

});

router.get("/portafolio/:nickname/", async (req, res) => {

    var parametros = req.params;
    var nickname = parametros.nickname;

    var user = await User.findOne({
        nickname: nickname
    }, {
        __v: 0,
        _id: 0,
        password: 0
    });


    if (!user) {
        return res.status(404).send({
            message: "El usuario " + nickname + " no existe"
        });
    }

    var portafolio = []
    for (let i = 0; i < user.portafolio.length; i++) {
        const reqID = user.portafolio[i];
        var request = await Request.findOne({reqID: reqID})
        portafolio.push(request)
    }

    return res.send(portafolio);
});

router.get("/profile/:nickname", async (req, res) => {

    var parametros = req.params;
    var nickname = parametros.nickname;
    var user = await User.findOne({
        nickname: nickname
    }, {
        __v: 0,
        _id: 0,
        password: 0
    });

    if (!user) {
        return res.status(404).send({
            message: "El usuario " + nickname + " no existe"
        });
    }
    return res.send(user);
});

router.post("/register", async (req, res) => {

    var datosUsuario = req.body;

    var userExists = await User.findOne({
        $or: [{
            nickname: datosUsuario.nickname
        }, {
            email: datosUsuario.email
        }]
    });
    if (userExists) {
        return res.status(401).send({
            error: "El usuario con este nickname/correo ya existe"
        });
    }

    var usuarioRegistrado = new User({
        nickname: datosUsuario.nickname,
        name: datosUsuario.name,
        lastName: datosUsuario.lastName,
        email: datosUsuario.email,
        password: datosUsuario.password,
    });

    await usuarioRegistrado.save();

    res.send({
        message: "Usuario registrado correctamente"
    });

});

router.put("/profile/:nickname", async (req, res) => {

    const nickname = req.params.nickname;
    const userData = req.body;

    var user = await User.findOne({
        nickname: nickname
    });

    if (!user) {
        return res.status(404).send({
            message: "El usuario " + nickname + " no existe"
        });
    }
    var propiedades = Object.keys(userData);

    for (let i = 0; i < propiedades.length; i++) {
        const propiedad = propiedades[i];

        switch (propiedad) {
            case "name":
                user.name = userData.name;
                break;
            case "lastName":
                user.lastName = userData.lastName;
                break;
            case "password":
                user.password = userData.password;
                break;
        }
    }

    await user.save();
    res.send({
        message: "Se actualizó correctamente el perfil del usuario: " + nickname
    });

});

router.put("/portafolio/:nickname", async (req, res) => {

    const nickname = req.params.nickname;
    const userData = req.body;

    var user = await User.findOne({
        nickname: nickname
    });

    if (!user) {
        return res.status(404).send({
            message: "El usuario " + nickname + " no existe"
        });
    }
    
    user.portafolio = userData.portafolio;
       
    await user.save();
    res.send({
        message: "Se actualizo correctamente el portafolio del usuario: " + nickname
    });

});

router.delete("/:nickname", async (req, res) => {

    var parametros = req.params;
    var nickname = parametros.nickname;

    var usuarioBorrado = await User.deleteOne({
        nickname: nickname
    });

    res.send({
        message: "Se ha borrado el usuario: " + nickname
    });
});

module.exports = router;