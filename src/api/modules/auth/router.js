// npm packages
import Router from 'koa-router'

// our packages
import Controller from './controller'
import Validator from './validator'

const router = new Router({ prefix: '/auth' })

router
  .post(
    '/',
    Validator.authenticate,
    Controller.authenticate
  )

export default router
