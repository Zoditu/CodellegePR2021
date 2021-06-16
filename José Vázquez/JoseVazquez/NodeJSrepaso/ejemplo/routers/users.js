const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.post('/register', async function (req, res){
    var userInfo = req.body;

    var usuarioNuevo = new User(userInfo);
    await usuarioNuevo.save();

    res.send({ 
        message: 'POST registro de usuario, manda en el body la información de registro',
        userInfo: userInfo
    });
    console.log('POST registro de usuario, manda en el body la información de registro');
});

router.get('/profile', async function (req, res){
    res.send({
    message:'GETEste es un perfil',
    message: 'GETEste es un pefil, mensaje para postman'
    });
});

router.get('/user/:IDUser', async function (req, res){

    var user = await User.findOne({nickname: req.params.IDUser}); 

    res.send({
        message: 'GETEste es el ID de un user, ID en forma de nickname en el PARAMS-PARAMETRO. Buscar usuario: ' + req.params.IDUser,
        user: user
    });
});

router.put('/edit/:IDUser', async function (req, res){
    var IDUser = req.params.IDUser;
    var datosUsuario = req.body;

    var usuario = await User.findOne({nickname: IDUser});
    usuario = new User(datosUsuario);
    await usuario.save();

    res.send({
        message: 'PUTEste es el ID de un user. Actualizar usuario: ' + IDUser,
        datosUsuario: usuario
    });
});

router.delete('/deleteUser', async function (req, res){
    var IDUser = req.body.IDUser;
    await User.deleteOne({nickname: IDUser});
    res.send({
        message: 'DELETEste es el ID de un user. Eliminar al usuario ' + IDUser
    });
});

module.exports = router;