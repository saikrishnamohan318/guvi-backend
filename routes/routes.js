var express = require('express');
var router = express.Router();

var userDetailsschema = require('../models/schema');
router.post('/addDetails', (req,res)=>{
    var body = req.body;
    var ud = new userDetailsschema(body);
    ud.save((err,doc)=>{
        if(err){
            res.status(409);
            res.send(err);
        }
        if(doc){
            res.status(201);
            res.send(doc);
        }
    })
})

router.get('/getDetails', (req,res)=>{
    userDetailsschema.find({}, (err,doc)=>{
        if(err){
            res.status(409);
            res.send(err);
        }else{
            res.status(200);
            res.send(doc);
        }
    })
})

router.get('/getDetails/:email', (req,res)=>{
    userDetailsschema.find({email: req.params.email}, (err,doc)=>{
        if(err){
            res.status(409);
            res.send(err);
        }else{
            res.status(200);
            res.send(doc);
        }
    })
})

router.put('/addDetails/:email', (req,res)=>{
    var body = req.body;
    userDetailsschema.findOne({email: req.params.email}, (err,doc)=>{
        if(err){
            res.status(409);
            res.send(err);
        }else{
            doc.age = body.age;
            doc.gender = body.gender;
            doc.mobile = body.mobile;
            doc.city = body.city;
            doc.save();
            res.status(201);
            res.send(doc);
        }
        
    })
})
module.exports = router;