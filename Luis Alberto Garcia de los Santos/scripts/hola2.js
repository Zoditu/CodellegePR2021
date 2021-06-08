var FileStream = require("fs");

var http = require("http");
// FileStream.mkdirSync("Carpeta");


var server = http.createServer(function(request, response){
    response.write("Te conectaste!");
    response.end();
});

server.listen(666, function(){
    console.log("Se ha creado el servidor en el puerto 666");
    console.log("Para usar el servidor haga una peticion en http://localhost:666");

});