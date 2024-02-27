const mongoose = require('mongoose')
async function generateShortId() {
    const { nanoid } = await import('nanoid');
    return nanoid(); // Generates and returns the ID
  }

const shortUrlSchema = new mongoose.Schema({
    full: {
        type: String,
        required: true
    },

    short: {
        type: String,
        required: true,
        default: generateShortId()
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