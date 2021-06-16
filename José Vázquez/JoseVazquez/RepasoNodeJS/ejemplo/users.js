const express = require('express');
const router = express.Router();

router.get('/all', function (req, res){
    res.send('GET de todos los usuarios');
});

roter.post('/register', function (req, res){
    res.send('POST de registro de user');
});

module.exports = router;