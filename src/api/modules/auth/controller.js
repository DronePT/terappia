// our packages
import Responder from './../../../utils/Responder'

const logger = require('debug')('terappia:AuthController')

class AuthController {
  async authenticate (ctx, next) {
    // verify if body is valid
    if (!ctx.isValid) {
      ctx.status = 400
      ctx.body = new Responder()
        .asError('validation error')
        .withData(ctx.validationErrors)

      return
    }

    ctx.body = new Responder()
      .withData({
        token: '8zoQIrS4o7QlIPDnA7wdHb69cOl099sG'
      })
  }
}

export default new AuthController()
