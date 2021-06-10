const express = require('express');
const router = express.Router();

router.get('/:urlBigYoshi', function(req, res){
    res.send({image: true, url: req.params.urlBigYoshi});
});

module.exports = router;