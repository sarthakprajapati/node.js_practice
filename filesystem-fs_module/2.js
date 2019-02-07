// Append Files

var fs = require("fs");

fs.appendFile("2.txt", "Hello My Name Is Sarthak",function(err){
    if(err) throw err;
    console.log("Save");
});
