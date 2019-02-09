// insertMany() function and insertedCount Property 

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo = db.db('practice');
    var data = [{name: "Sarthak Prajapati" , Branch: "Information Technology" }, 
                {name: "Rudransh Shrivastav", Branch : "Information Technology"},
                {name: "Uday Shinghal", Branch: "BioTechnology"},
                {name: "Avantika GUpta", Branch: "Computer Science"}
                ];
    dbo.collection("manyAtOnce").insertMany(data,function(err, res){
        if(err) throw err;
        console.log("Successfully Inserted "+res.insertedCount);
        db.close();
    });
});
