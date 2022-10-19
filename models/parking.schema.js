var mongoose = require('mongoose');

var schema = mongoose.Schema;

var parkingDetails = new schema({
    vehicleNum: {
        type: String
    },
    name: {
        type: String
    },
    Intime: {
        type: Date
    },
    Outtime: {
        type: Date
    }
})

module.exports = mongoose.model('parkingDetails', parkingDetails);