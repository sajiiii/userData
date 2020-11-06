var express = require('express');
var router = express.Router();
let mongodb=require('../models/mongodb')
router.post('/', function(req, res, next) {
  mongodb.deleteUser(req.body).then((data)=>{
      res.send({code:200,message:'Sucess',data:data});    
  }).catch(e=>{
    res.send(e)
  })
    
});

module.exports = router;