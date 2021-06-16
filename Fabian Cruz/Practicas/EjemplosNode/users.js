const express = require('express');
const router = express.Router();

router.get('/all', function(req, res) {
    res.send('Get de todos lo users')
});

//  app es la aplicacion de express...
app.get('/test/hola', function(req, res) {
    res.status(405).send('Hola desde express');
});

router.post('/test/hola/:z', function(req, res) {
    var body = req.body;
    var query = req.query;
    var params = req.params;

    var x = body.x;
    var y = query.y;
    var z = params.z;

    res.send('X: ' + x + ', Y: ' + y + ', Z: ' + z)
});

router.patch('/test', function(req, res) {
    res.send('Patch desde Express')
});


module.exports = router;