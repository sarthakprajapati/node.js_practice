// Read Files

var http = require("http");
var fs = require("fs");

http.createServer(function(req, res){
    fs.readFile('1.html',function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        req.write(data);
        req.end();
    });
}).listen(8056);