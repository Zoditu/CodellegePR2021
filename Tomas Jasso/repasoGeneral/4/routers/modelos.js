const express = require('express');
const router = express.Router();

const Mascotas = require('../models/mascota');

router.post('/dummy/:tipo', function(req, res) {
    var tipoModelo = req.params.tipo;

    switch(tipoModelo) {
        case "mascota":
            var mascota = new Mascota ({
                nombre: "Lucky",
                raza: "Chihuahua",
                edad: 7,
                fechaNac: new Date(),
                dueño: "Marisol"
            });

                await mascota.save();
            break;
    }
});

module.exports = routers