var http = require("http");
//var url = require("url");
//var fs = require("fs");
var uc = require("upper-case");

//var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc.upperCase("Hello World!"));
    res.end();
}).listen(8080);

/*
fs.rename('newfile1.txt', "uusfailinimi.txt", function (err) {
    if (err) throw err;
    console.log('File renamed!');
});
*/
