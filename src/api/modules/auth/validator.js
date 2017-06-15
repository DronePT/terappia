// npm packages
import Joi from 'joi'
import thenify from 'thenify'

const validate = thenify(Joi.validate)

class AuthValidator {
  async authenticate (ctx, next) {
    const schema = Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().min(5).required()
    })

    ctx.isValid = true

    validate(ctx.request.body, schema)
      .then(next)
      .catch(err => {
        ctx.isValid = false
        ctx.validationErrors = err.details.map(({ message }) => message)
        next()
      })
  }
}

export default new AuthValidator()
