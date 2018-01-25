const showReq = req => {
    console.log('*********************************************************')
    console.log('')
    console.log(`THE URL:`)
    console.log(req.url)
    console.log('')

    console.log('THE METHOD:')
    console.log(req.method)
    console.log('')

    console.log('THE QUERY VALUES:')
    console.log(req.query)
    console.log('')

    console.log('THE POST BODY:')
    console.log(req.body)
    console.log('')
    console.log('')
    console.log('')
    console.log('')
}

const allowCors = app => {
    app.use((req, res, next) => {

        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")

        if (req.method === 'OPTIONS') {
            return res.status(200).end()
        }
        next()
    })
}

module.exports = {
    showReq,
    allowCors
}