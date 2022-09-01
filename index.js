var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var app = express();
var routes = require('./routes/routes');
app.use(cors());
app.use(express.json());
app.use(routes);
var url = 'mongodb+srv://Saikrishnamohan:4Sl4stzyXpbvk7hb@cluster0.eggzxuh.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(url, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('connected to db');
    }
})

app.listen(process.env.PORT || 5000, () => {
    console.log('sever started');
})