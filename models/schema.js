var mongoose = require('mongoose');

var schema = mongoose.Schema;

var userDetails = new schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    },
    confirmPassword:{
        type: String
    },
    age:{
        type: Number
    },
    gender:{
        type: String
    },
    mobile:{
        type: Number
    },
    city:{
        type: String
    }
})

module.exports = mongoose.model('userDetails', userDetails);