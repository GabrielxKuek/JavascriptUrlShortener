const mongoose = require('mongoose')
const shortId = require('shortid')

const shortUrlSchema = new mongoose.Schema({
    full: {
        type: String,
        required: true
    },

    short: {
        type: String,
        required: true,
        default: shortId.generate()
        // shortid library creates a unique short identifier
    },

    clicks: {
        type: Number,
        required: true,
        default: 0
    }

})

module.exports = mongoose.model('ShortUrl', shortUrlSchema)
//connects database to model