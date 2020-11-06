var mongo = require('mongodb');

var url = "mongodb://localhost:27017/";

let mongoConnect={
  find(query={}){
    return new Promise(function (resolve, reject) {
      try{
        mongo.MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {    
          if (err) throw err;
          var dbo = db.db("mydb");
         
          dbo.collection("users").find(query).toArray(function (error, result) {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
            db.close();
          });
        });
      }catch(e){
        console.log(e)
      }

  })
  },
createUser(params){
  return new Promise(function (resolve, reject) {
  mongo.MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
    if (err) throw reject(err);
    var dbo = db.db("mydb");

    var myobj = params;

    mongoConnect.find({userName:myobj.userName}).then((data)=>{
      if(!data.length||!data){
        dbo.collection("users").insertOne(myobj, function(err, res) {
          if (err) throw reject(err);
          resolve("inserted")
          db.close();
        });
      }else{
        resolve("record  already exist")
      }
    }).catch((e)=>{
      reject(e)
    })
  });
})
},
updateUser(data){
  return new Promise(function (resolve, reject) {
  mongo.MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
    if (err) throw reject(err);
    var dbo = db.db("mydb");

    var myquery = {userName:data.userName};
    var newvalues = { $set: data };

    dbo.collection("users").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw reject(err);
      resolve("updated")
      db.close();
    });
  });
})
},
deleteUser(data){
  return new Promise(function (resolve, reject) {
  mongo.MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
    if (err) throw reject(err);
    var dbo = db.db("mydb");  
    var myquery = {userName:data.userName};
    dbo.collection("users").deleteOne(myquery, function(err, res) {
      if (err) throw reject(err);
      resolve("deleted")
      db.close();
    });
  });
})
}
}
module.exports =  mongoConnect;