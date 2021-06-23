var FileStream = require('fs');
var http = require('http');
<<<<<<< HEAD





var server = http.createServer(function(request, response){
    response.write('Te conectaste')
    response.end()
});

server.listen(666, function(){
    console.log('Se ha creado  el servidor puerto 666');
    console.log('Has entrado al 666 haga una peticion a');
=======
//FileStream.mkdirSync('carpeta');

var server = http.createServer(function(request, response){
    response.write('Te conectaste');
    response.end();
});

server.listen(666, function(){
    console.log('Seha creado el servidoren en el puerto 666');
    console.log('Para usar el servidor, haga una petición en http://localhost:666');
>>>>>>> main
});