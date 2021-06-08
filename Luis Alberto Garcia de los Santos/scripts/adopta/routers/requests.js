const express = require('express');
const router = express.Router();


const Request = require('../models/request');

router.get('/all', function(req, res) {
    
});

router.get('/request/:RequestID', function(req, res) {
    var requestID = req.params.RequestID;
});

router.post('/register', async function(req, res){
    var requestInfo = req.body;

    var peticionNuevo = new Request(requestInfo);
    await peticionNuevo.save();

    res.send({
        message: "Registro de peticion",
        requestInfo: requestInfo
    });
});

router.put('/edit/:RequestID', async function(req, res){
    var requestID = req.params.RequestID;
    var datosPeticion = req.body;

    var peticion = await Request.findOne({nickname: requestID});
    peticion = new Request(datosPeticion);
    await peticion.save();

    res.send({
        message: "Actualizada la peticion: " + requestID,
        datosPeticion: peticion
    });
});

router.delete('/deleteRequest', async function(req, res){
    var RequestID = req.body.RequestID;
    
    await Request.deleteOne({nickname: RequestID});

    res.send({
        message: "Eliminar el usuario: " + RequestID
    });
});