//var http = require("http");
//var url = require("url");
var fs = require("fs");
//var dt = require('./myfirstmodule');

//create server object
/*
http.createServer(function (req, res) {
    fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080); //the server object listens on port 8080
 */

//replace newfile1.txt content:
fs.writeFile('newfile1.txt', ' This is my new text.', function (err) {
    if (err) throw err;
    console.log('Replaced!');
});
