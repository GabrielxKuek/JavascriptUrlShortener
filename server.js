const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')

const app = express()
mongoose.connect('mongodb://localhost/urlShortener')
// , {
//     useNewUrlParser: true, useUnifiedTopology: true
// }) 
// the code commented out is from the video, but is not needed because the MongoDB Driver im using is a newer, updated version where these settings are default
// keeping it here for reference for what this mongoose.connect does

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/shortUrls', async (req, res) => {
    await ShortUrl.create({ full: req.body.fullUrl })
  
    res.redirect('/')
  })

app.listen(process.env.PORT || 5000)