const { Router } = require('express');
const express = require('express');
const router = express.Router();

const Mascotas = require('../models/mascota')

router.post('/dummy:tipo', async (req, res) => {
    var tipoModelo = req.params.tipo;

    switch (tipoModelo) {
        case 'mascota':
            var mascota = new Mascotas({
                nombre: "Lucky",
                raza: "chihuahua",
                edad: 7,
                fechaNac: new Date,
                dueño: 'Marisol'
            });

            await mascota.save()
            break;

        default:
            break;
    }

    res.send('Creado correctamente el tipo: ' + tipoModelo);
});

router.get('/all/:tipo', async (req, res) => {
    var tipoModelo = req.params.tipo;

    switch (tipoModelo) {
        case 'mascota':
            var mascotas = await Mascotas.find({});
            res.send(mascotas);
            
            break;
    
        default:
            break;
    }
})

module.exports = router;