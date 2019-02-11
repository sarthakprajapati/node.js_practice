// updateOne() function and updateMany() function using $set operator which update only the specified fields.

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

MongoClient.connect(url,function(err, db){
    if(err) throw err;
    var dbo = db.db('practice');
    var query = {name : 'Avantika GUpta'}; 
    var newEntry = {$set :{branch : 'ECE'}};
    dbo.collection('manyAtOnce').updateOne(query,newEntry,function(err, res){
        if(err) throw err;
        console.log("Successfully Updated!");
        db.close();
    });
});

