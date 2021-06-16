const express = require('express');
const router = express.Router();

// ======================================== import
const User = require('../models/user');
const Request = require('../models/request');
const user = require('../models/user');

// ======================================== Endpoint
router.get('/all', async (req, res) => {
    var users = await User.find({});
    res.send(users);
});

router.get('/:nickname/folder', async (req, res) => {
    var nickname = req.params.nickname;
    var user = await User.findOne({ nickname: nickname });

    if(!user) {
        return res.status(404).send({
            message: 'El nickname ' + nickname + ' no existe.'
        });
    }

    var folder = []
    for (let i = 0; i < user.portafolio.length; i++) {
        const reqID = user.portafolio[i];
        var request = await Request.findOne({ reqID: reqID });
        folder.push(request);
    };

    res.send({
        message: 'Este es el portafolio de: ' + nickname,
        folder: folder
    });
});

router.get('/user/:nickname', async (req, res) => {
    var user = await User.findOne({ nickname: req.params.nickname });
    
    res.send({
        message: 'Este es el portafolio del usuario: ' + req.params.nickname,
        user: user
    });
});

router.post('/register', async (req, res) => {
    var datosUser = req.body;
    var userNew = new User(datosUser);
    await userNew.save();

    res.send({
        message: 'El usuario se ha registrado exitosamente.',
        datosUser: datosUser
    });
});

router.put('/edit/:nickname', async (req, res) => {
    var nickname = req.params.nickname;
    var datosUser = req.body;
    var user = await User.findOne({ nickname: nickname });

    if(!user){
        return res.status(404).send({
            message: 'El usuario: ' + nickname + ' no existe'
        });
    };

    var propiedades = Object.keys(datosUser);
    for (let i = 0; i < propiedades.length; i++) {
        const propiedad = propiedades[i];
        
        switch (propiedad) {
            case 'name':
                    user.name = datosUser.name;
                break;
            case 'lastName':
                    user.lastName = datosUser.lastName;
                break;
            case 'email':
                    user.email = datosUser.email
                break;
            case 'password':
                    user.password = datosUser.password
                break;
            case 'portafolio':
                    user.portafolio = datosUser.portafolio;
                break;
        };
    };

    await user.save()
    res.send({
        message: 'Se ha actualizado la información correctamente'
    });
});

router.put('/:nickname/editFolder/', async (req, res) => {
    var nickname = req.params.nickname;
    var reqID = req.params.reqID
    var nickname = await User.findOne({ nickname: nickname });
    var folder = await Request.findOne({ reqID: reqID });
    var editFolder = req.body;  

    if (!nickname) {
        return res.status(404).send({
            message: 'El usuario ' + nickname + ' no existe.'
        });
    };

    if (!folder) {
        return res.status(404).send({
            message: 'El portafolio ' + reqID + ' no existe.'
        });
    };

    nickname.portafolio = editFolder.portafolio;

    await folder.save();
    res.send({
        message: 'Los datos del portafolio se han actualizado correctamente.',
        nickname: nickname
    });
});

router.delete('/deleteUser/:nickname', async (req, res) => {
    var nickname = req.params.nickname;

    await User.deleteOne({ nickname: nickname });

    res.send({
        message: 'El usuario ' + nickname + ' se ha eliminado correctamente.'
    });
});

// ======================================== Exportar router
module.exports = router;