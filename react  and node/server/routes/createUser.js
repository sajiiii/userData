var express = require('express');
var router = express.Router();
let insert=require('../models/mongodb')
router.post('/', function(req, res, next) {
  insert.createUser(req.body).then((data)=>{
    if(data==="inserted"){
      res.send({code:200,message:'User Created Sucessfully'});
    }else if(data==="record  already exist"){
      res.send({code:409,message:'User  already exist with this user name.'});
    }else{
      res.send('something went wrong');
    }
    
  }).catch(e=>{
    res.send(e)
  })
    
});

module.exports = router;