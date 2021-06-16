app.post('/ejemplo/hola/:z', function (req, res){
    var body = req.body;
    var query = req.query;
    var params = req.params;
    
    var x = body.x;
    var y = query.y;
    var z = params.z;
    res.send("X: " + x + ", Y: " + y + ", Z: " + z);
});

app.get('/ejemplo/hola', function (req, res){
    res.status(405).send('GET desde Express');
});

app.patch('/ejemplo/test', function (req, res){
    res.send('PATCH desde Express');
});