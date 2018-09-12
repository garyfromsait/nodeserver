// Basic Express setup
const express       = require('express')
const app           = express()

// body parser allows us to read the body of http requests 
const bodyParser    = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// defining routes in another file just to make things cleaner
const setupRoutes   = require('./routes')
setupRoutes(app)

// defining allowCors function in another file just make to make things cleaner
const util          = require('./util')
util.allowCors(app)

app.listen(3000, () => console.log('Example app listening on port 3000!'))