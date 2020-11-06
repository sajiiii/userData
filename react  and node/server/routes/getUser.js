var express = require('express');
var router = express.Router();
let mongodb=require('../models/mongodb')
router.get('/', function(req, res, next) {
  mongodb.find().then((data)=>{
      res.send({code:200,message:'Sucess',data:data});    
  }).catch(e=>{
    res.send(e)
  })
    
});

module.exports = router;