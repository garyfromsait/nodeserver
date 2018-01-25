const util       = require('./util')
const toHex         = require('colornames')

let store = {
    username: 'Gary',
    job: 'Developer'
}

module.exports = app => {

    // basic endpoint
    app.get('/', (req, res) => res.send('Hello World!'))

    // return our in memory database
    app.get('/data', (req, res) => res.json(store))
    
    // replace database with whatever the request body is
    app.post('/data', (req, res) => {
        store = req.body
        res.json(store)
    })

    // conosle log the http request details for get
    app.get('/get-example', (req, res) => {
        utils.showReq(req)
        res.send('this is a response from get')
    })
    
    // conosle log the http request details for post
    app.post('/post-example', (req, res) => {
        console.log(req.body)
        util.showReq(req)
        res.send('this is a response from post')
    })

    // endpoing that returns the hex if you give it a color in string format
    app.post('/color', (req, res) => {
        if (!req.body.color) {
            throw new Error('No color defined')
        }
        res.send(`The ${req.body.color} in hex is ${toHex(req.body.color)}`)
    })
}
