const express = require('express')

const server = express()

const port  = 3002

server.listen(port, function() {
    console.log('Example is listening on port ' + port)
})

server.use('', express.static('./'))