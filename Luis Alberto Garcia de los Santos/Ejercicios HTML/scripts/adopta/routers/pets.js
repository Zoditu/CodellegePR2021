const express = require('express');
const router = express.Router();

const Pet = require('../models/pet');

router.get('/all', function(req, res) {
    
});

router.get('/pet/:PetID', function(req, res) {
    var petID = req.params.PetID;
});

router.post('/new', async function(req, res) {
    var datosPett = req.body;
    var pet = await new Pet(datosPet);
    await pet.save();

    res.send({
        message: "Mascota registrada para adopcion",
        pet: pet
    });
});

router.put('/edit/:PetID', async function(req, res) {
    var petID = req.params.PetID;
    var datosPet = req.body;

    var pet = await Pet.findOne({petID: petID});
    pet.content = datosPet.content;
    await pet.save();

    res.send({
        message: "Se actualizó la informacion de la mascota : " + petID,
        pet: pet
    });
});

router.delete('/deletePet', function(req, res) {
    var petID = req.body.petID;
});