const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    var query = req.query
    var mapa = {
        map: true,
        location: query
    }
    res.send(mapa);
});

module.exports = router;