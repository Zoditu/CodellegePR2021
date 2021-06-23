const express = require('express');
const router = express.Router();
// ======================================== import
const Pet = require('../models/pet');

// ======================================== endpoints

router.get('/all', async (req, res) => {
    var pets = await Pet.find({});

    res.send(pets);
});

router.get('/pet/:petID', async (req,res) => {
    var pet = await Pet.findOne({ petID: req.params.petID });
    res.send({
        message: 'Se encontre la mascota con ID: ' + req.params.petID,
        pet: pet
    });
})

router.post('/register', async (req, res) => {
    var datosPet = req.body;
    var petNew = new Pet(datosPet);
    await petNew.save();

    res.send({
        message: 'La mascota fue registrada exitosamente',
        datosPet: datosPet
    });
})

router.put('/edit/:petID', async (req, res) => {
    var petID = req.params.petID;
    var datosPet = req.body;
    var pet = await Pet.findOne({ petID: petID });

    if(!pet){
        return res.status(404).send({
            message: 'La mascota con ID ' + petID + ' no existe.'
        });
    }

    var propiedades = Object.key(datosPet);
    for (let i = 0; i < propiedades.length; i++) {
        const propiedad = propiedades[i];
        
        switch (propiedad) {
            case 'name':
                pet.name = datosPet.name;
                break;
            case 'type':
                pet.type = datosPet.type;
                break;
            case 'age':
                pet.age = datosPet.age;
                break;
            case 'description':
                pet.description = datosPet.description;
                break;
        };
    };
    
    await pet.save();
    res.send({
        message: 'Los datos se han actualizado correctamente',
        pet: pet
    })
})

router.delete('/deletePet/:petID', async (req, res) => {
    var petID = req.params.petID;

    await Pet.deleteOne({ petID: petID });

    res.send({
        message: 'Datos de la mascota: ' + petID + ' eliminados.'
    })
})
// ========================================
module.exports = router;