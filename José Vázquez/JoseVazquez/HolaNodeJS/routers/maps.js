const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', function(req, res){
    res.send({map: true, location: {lat: req.query.lat, long: req.query.long}});
});

//localhost:1010/maps/new
router.post('/new', function(req, res){
    res.send({map: true, location: {lat: req.query.lat, long: req.query.long}});
});

module.exports = router;