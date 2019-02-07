
//Read the Query String

var http = require("http");
var url = require("url")
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8056);  //http://localhost:8056/?year=2019&month=Feb