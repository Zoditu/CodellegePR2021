var FileStream = require('fs');
var http = require('http');
//FileStream.mkdirSync('carpeta');


var server = http.createServer (function(request, response){
    response.write('Te conectaste!');
    response.end();

});

server.listen(666, function(){
    console.log('Se ha creado el servidor en el puero 666')
    console.log('Para usar el servidor, haga una petición en http://localhost666')
});