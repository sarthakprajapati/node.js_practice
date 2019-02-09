// Sort()

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

MongoClient.connect(url,function(err, db){
    if(err) throw err;
    var dbo = db.db('practice');
    var mysort = { name: -1 }; // Descending Order Sorting
    var query = {}; 
    dbo.collection('manyAtOnce').find(query).sort(mysort).toArray(function(err, res){
        if(err) throw err;
        console.log(res);
        db.close();
    });
});