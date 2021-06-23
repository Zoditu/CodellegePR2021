const express = require('express');
const router = express.Router();

router.get('/all', function(req, res){
    res.send('GET de todos los users');
});

router.post('/register', function(req, res){
    var userInfo = req.body; 
    //logica de registro 
    //regresar al final un mensaje al usuario 
    res.send(userInfo);
});

router.get('/profile', function(req, res){
    res.send({
        message: 'GET de Profile'
    });
});

//localhost:888/users/user/MariellGzz

router.get ('/user/:IDUser', function (req, res){
    //req.body
    //req.query
    //req.params.IDUser 

    res.send({
        message: "Buscar al usaurio" + req.params.IDUser
    });
});

router.put('/edit/:IDUser', function (req, res){
    var IDUser =req.params.IDUser; 
    var datosUsuario= req,body; 
    //logica actualizar al usuario

    res.send ({
        message: 'Actualizar al ususario: ' + IDUser,
        datosUsuario: datosUsuario 
     });
});

router.delete('/deleteUser', function (req, res){
    var IDUser = req.body.IDUser; 
    //logica de borrar un usuario 

    res.send({
        message: "Eliminar el ususario: " + IDUser 
    });
})

module.exports = router;