const express       = require('express')
const bodyParser    = require('body-parser')
const app           = express()

app.use(bodyParser.urlencoded({ extended: false }))

// routes
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/date', (req, res) => {
    res.json({
        date: Date.now()
    })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))