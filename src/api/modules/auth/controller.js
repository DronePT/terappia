import Responder from './../../../utils/Responder'

const logger = require('debug')('terappia:AuthController')

class AuthController {
  authenticate (ctx) {
    logger(ctx.request.body)

    ctx.body = new Responder()
      .asError('Invalid credentials')
      .withData({
        missing: [ 'email', 'password' ]
      })
  }
}

export default new AuthController()
