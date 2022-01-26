var http = require("http");
var url = require("url");
//var dt = require('./myfirstmodule');

//create server object
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); //write a response to the client
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8080); //the server object listens on port 8080
