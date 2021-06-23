const express = require('express');
const router = express.Router();

//Importar los modelos necesarios
const User = require('../models/user');

//Definir los endpoints
//localhost:888/users/getUser
router.post('/register', async function(req, res){
    var userInfo = req.body;

    var usuarioNuevo = new User(userInfo);
    await usuarioNuevo.save();

    res.send({
        message: "Registro de usuario",
        userInfo: userInfo
    });
});

router.get('/profile', function(req, res){
    res.send({
        message: 'GET de Profile'
    });
});

//localhost:888/users/user/KevinM
router.get('/user/:IDUser', async function(req, res){

    var user = await User.findOne({nickname: req.params.IDUser});

    res.send({
        message: "Buscar al usuario: " + req.params.IDUser,
        user: user
    });
});

router.put('/edit/:IDUser', async function(req, res){
    var IDUser = req.params.IDUser;
    var datosUsuario = req.body;
    //Lógica actualizar al usuario
    var usuario = await User.findOne({nickname: IDUser});
    usuario = new User(datosUsuario);
    await usuario.save();

    res.send({
        message: "Actualizar al usuario: " + IDUser,
        datosUsuario: usuario
    });
});

router.delete('/deleteUser', async function(req, res){
    var IDUser = req.body.IDUser;
    //Lógica de borrar un usuario
    await User.deleteOne({nickname: IDUser});

    res.send({
        message: "Eliminar el usuario: " + IDUser
    });
});

module.exports = router;