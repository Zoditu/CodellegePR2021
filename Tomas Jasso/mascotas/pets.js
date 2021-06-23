const express = require('express');
const router = express.Router();

//Importar el modelo de datos de Pets
const Post = require('../models/pets');

//Definir los endpoints


//Todas las mascotas
router.get('/all', async function(req, res) {
    var datosGet = req.body;
    var get = await new Post(datosPost);
    await get.save();

    res.send({
        message: "POST de nueva publicación",
        post: post
    });
});

//Ver una en especifico
router.get('/all/type/:z', async function(req, res) {
    var datosGet = req.body;
    var get = await new Post(datosPost);
    await get.save();

    res.send({
        message: "POST de nueva publicación",
        post: post
    });
});