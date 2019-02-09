// MongoDB findOne() 

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo = db.db('practice');
    dbo.collection('manyAtOnce').findOne({},function(err,res){
        if(err) throw err;
        console.log(res.name);
        db.close();
    });
});