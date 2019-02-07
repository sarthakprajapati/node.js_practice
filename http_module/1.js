var http = require("http");

http.createServer(function(req, res){
    res.write("Hello My name is Sarthak");
    res.end();
}).listen(8056);