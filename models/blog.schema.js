var mongoose = require('mongoose');

var schema = mongoose.Schema;

var blogDetails = new schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    url: {
        type: String
    },
    datePublished: {
        type: Date
    }
})

module.exports = mongoose.model('blogDetails', blogDetails);