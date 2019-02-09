// Find Along with Projection

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo = db.db('practice');
    dbo.collection('manyAtOnce').find({'Branch' : 'BioTechnology'},{projection : {_id:0,name :1}}).toArray(function(err, res){
        console.log(res);
        db.close();
    });
});

// [ { _id: 5c5e8207d8e19a2e087fc5db,
//     name: 'Uday Shinghal',
//     Branch: 'BioTechnology' },
//   { _id: 5c5e821b2ecc292e30285db0,
//     name: 'Uday Shinghal',
//     Branch: 'BioTechnology' } ]