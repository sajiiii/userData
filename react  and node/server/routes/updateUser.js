var express = require('express');
var router = express.Router();
let update=require('../models/mongodb')
router.post('/', function(req, res, next) {
  update.updateUser(req.body).then((data)=>{
    if(data==="updated"){
      res.send({code:200,message:'User updated Sucessfully'});
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