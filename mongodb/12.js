// deleteMany function

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

MongoClient.connect(url,function(err, db){
    if(err) throw err;
    var dbo = db.db('practice');
    var query = {name : 'Uday Shinghal'}; 
    dbo.collection('manyAtOnce').deleteMany(query,function(err, res){
        if(err) throw err;
        console.log("Successfully Deleted "+res.deletedCount+" !");
        db.close();
    });
});

// Successfully Deleted 2 !