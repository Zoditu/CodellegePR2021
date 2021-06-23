const express = require('express');
const router = express.Router();

// ============================================== Importar modelos

const User = require('../models/user');

// ============================================== Endpoint

router.post('/register', async (req, res) => {
    var datosUsuario = req.body;

    var userNew = new User(datosUsuario);
    await userNew.save();

    res.send({
        message: 'Usuario registrado correctamente',
        datosUsuario: datosUsuario
    });
})

router.get('/profile', (req, res)=> {
    res.send({
        message: 'Estas en tu perfil'
    });
});

router.get('/user/:IDUser', async (req, res) => {

    var user = await User.findOne({ nickname: req.params.IDUser });
    res.send({
        message: 'Buscar al usuario: ' + req.params.IDUser,
        user: user
    });
});

router.put('/edit/:IDUser', async (req, res) => {
    var IDUser = req.params.IDUser;
    var datosUsuario = req.body;

    var user = await User.findOne({ nickname: IDUser });
    user = new User(datosUsuario);
    await user.save();

    res.send({
        message: 'Actualizar al usuario: ' + IDUser,
        datosUsuario: datosUsuario
    });
});

router.delete('/deleteUser', async (req, res) => {
    var IDUser = req.body.IDUser;

    await User.deleteOne({ nickname: IDUser });

    res.send({
        message: 'Eliminar el usuario: ' + IDUser
    });
});

module.exports = router;