const express = require('express');
const router = express.Router();

router.get('/all', function (req, res){
    console.log('GET de todos los users');
});

router.post('/register', function (req, res){
    console.log('POST de registro de user');
});

module.exports = router;