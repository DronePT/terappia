// npm packages
import http from 'http'

// our packages
import App from './app'

const logger = require('debug')('terappia:server')

// constants
const PORT = process.env.PORT || 8080

// attach app to our server
const server = http.createServer(
  App.boot()
)

// start our server
logger('starting server...')

server.listen(
  PORT,
  data => logger(`server listning on port: ${PORT}`)
)
