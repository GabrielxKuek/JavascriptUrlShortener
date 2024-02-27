// const mongoose = require('mongoose')
// async function generateShortId() {
//     const { nanoid } = await import('nanoid');
//     return nanoid(); // Generates and returns the ID
//   }

// console.log(generateShortId())

// const shortUrlSchema = new mongoose.Schema({
//     full: {
//         type: String,
//         required: true
//     },

//     short: {
//         type: String,
//         required: true,
//         default: generateShortId()
//         // shortid library creates a unique short identifier
//     },

//     clicks: {
//         type: Number,
//         required: true,
//         default: 0
//     }

// })

const mongoose = require('mongoose');

// Assuming generateShortId is defined somewhere above
async function generateShortId() {
    const { nanoid } = await import('nanoid');
    return nanoid();
}

const shortUrlSchema = new mongoose.Schema({
    full: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    }
});

// Pre-save hook to generate short ID if it's not set
shortUrlSchema.pre('save', async function(next) {
    // Check if the document is new or the short field is not set
    if (this.isNew || !this.short) {
        this.short = await generateShortId();
    }
    next();
});

module.exports = mongoose.model('ShortUrl', shortUrlSchema)
//connects database to model