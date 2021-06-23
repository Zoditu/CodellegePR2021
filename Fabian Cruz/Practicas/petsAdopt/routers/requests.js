const express = require('express');
const router = express.Router();

// ============================ Importar
const Request = require('../models/request');

// ============================ Endpoint
router.get('/all', async (req, res) => {
    var request = await Request.find({});
    res.send(request);
});

router.get('/find/:reqID', async (req, res) => {
    var reqID = req.params.reqID;
    var folder = await Request.findOne({ reqID: reqID });

    if(!folder){
        return res.status(404).send({
            message: 'El portafolio ' + reqID + ' no existe.'
        });
    }
    res.send(folder);
});

router.post('/register', async (req, res) => {
    var dataReq = req.body
    var reqNew = new Request(dataReq);
    await reqNew.save();

    res.send({
        message: 'La petición se ha registrado correctamente',
        dataReq: dataReq
    });
});

router.put('/edit/:reqID', async (req, res) => {
    var reqID = req.params.reqID;
    var datosFolder = req.body;
    var folder = await Request.findOne({ reqID: reqID });

    if(!folder){
        return res.status.send({
            message: 'La petición ' + reqID + ' no existe.'
        });
    };

    var propiedades = Object.keys(datosFolder);
    for (let i = 0; i < propiedades.length; i++) {
        const propiedad = propiedades[i];
        switch (propiedad) {
            case 'nickname':
                    folder.nickname = datosFolder.nickname;
                break;
            case 'status':
                    folder.status = datosFolder.status;
                break;
            case 'petID':
                    folder.petID = datosFolder.petID;
                break;
            case 'dateAdopt':
                    folder.dateAdopt = datosFolder.dateAdopt;
        };
    };
    folder.save();
    res.send({
        message: 'Se realizo la actualización de los datos satisfactoriamente'
    });

});

router.delete('/delete/:reqID', async (req, res) => {
    var reqID = req.params.reqID;
    await Request.deleteOne({ reqID: reqID });

    res.send({
        message: 'Los datos han sido eliminados.'
    });
});

// ============================ Exportar
module.exports = router;