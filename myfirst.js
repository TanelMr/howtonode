var http = require('http');
//var dt = require('./myfirstmodule');

//create server object
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); //write a response to the client
    res.write(req.url);
    res.end();
}).listen(8080); //the server object listens on port 8080
