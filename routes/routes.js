var express = require('express');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var router = express.Router();

/*guvi routes*/
var userDetailsschema = require('../models/guvi.schema');
router.post('/addDetails', async (req,res)=>{
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

/*blog routes*/
var blogSchema = require('../models/blog.schema');
router.post('/postBlog', (req,res) => {
    var body = req.body;
    var bs = new blogSchema(body);
    bs.save((err,doc)=>{
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

router.get('/getBlogs', (req,res)=>{
    blogSchema.find({}, (err,doc)=>{
        if(err){
            res.status(409);
            res.send(err);
        }else{
            res.status(200);
            res.send(doc);
        }
    })
})

/*Parking routes*/
var parkingSchema = require('../models/parking.schema');
router.post('/postCar', (req,res) => {
    var body = req.body;
    var ps = new parkingSchema(body);
    ps.save((err,doc)=>{
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

router.get('/getCars', (req,res)=>{
    parkingSchema.find({}, (err,doc)=>{
        if(err){
            res.status(409);
            res.send(err);
        }else{
            res.status(200);
            res.send(doc);
        }
    })
})

router.put('/postCar/:vehicleNumber', (req,res)=>{
    var body = req.body;
    parkingSchema.findOne({vehicleNum: req.params.vehicleNumber}, (err,doc)=>{
        if(err){
            res.status(409);
            res.send(err);
        }else{
            doc.Outtime = body.time;
            doc.save();
            res.status(201);
            res.send(doc);
        }
        
    })
})

module.exports = router;