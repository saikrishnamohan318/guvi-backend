var mongoose = require('mongoose');

var schema = mongoose.Schema;

var parkingDetails = new schema({
    vehicleNum: {
        type: String
    },
    name: {
        type: String
    },
    checkIn: {
        type: Date
    },
    checkOut: {
        type: Date
    }
})

module.exports = mongoose.model('parkingDetails', parkingDetails);