const express = require('express');
const router = express.Router();

router.get('/:imageURL', (req, res) => {
    var params = req.params.imageURL
    var imagen = {
        image: true,
        url: params
    };

    res.send(imagen)
})

module.exports = router;