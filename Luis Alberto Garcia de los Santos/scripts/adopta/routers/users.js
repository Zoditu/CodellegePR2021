const express = require('express');
const router = express.Router();


const User = require('../models/user');

router.get('/all', function(req, res) {
    
    var users = await User.find({},{
        __V:0,
        _id:0,
    });
});

router.get('/user/:UserID', function(req, res) {
    var userID = req.params.UserID;

    var user = await User.findOne({
        UserID: UserID
    }, {
        __v: 0,
        _id: 0,
        password: 0
    });
 
    if (!user) {
        
        return res.status(404).send({
            message: "El usuario: " + UserID + " no existe"
        });
    }

    return res.send(user);
});

router.get('/profile/:UserID', function(req, res){
    var userID = req.params.UserID;

    var user = await User.findOne({
        UserID: UserID
    }, {
        __v: 0,
        _id: 0,
        password: 0
    });
 
    if (!user) {
        
        return res.status(404).send({
            message: "El usuario: " + UserID + " no existe"
        });
    }

    return res.send(user);
});

router.post('/register', async function(req, res){
    var userInfo = req.body;

    var usuarioNuevo = new User(userInfo);
    await usuarioNuevo.save();

    res.send({
        message: "Registro de usuario",
        userInfo: userInfo
    });
});

router.put('/edit/:UserID', async function(req, res){
    var userID = req.params.UserID;
    var datosUsuario = req.body;

    var usuario = await User.findOne({nickname: userID});
    usuario = new User(datosUsuario);
    await usuario.save();

    res.send({
        message: "Actualizar al usuario: " + userID,
        datosUsuario: usuario
    });
});

//Pendiente PUT para modificar el portafolio de usuario

router.delete('/deleteUser', async function(req, res){
    var UserID = req.body.UserID;
    
    await User.deleteOne({nickname: UserID});

    res.send({
        message: "Eliminar el usuario: " + UserID
    });
});