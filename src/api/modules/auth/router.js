// npm packages
import Router from 'koa-router'

// our packages
import Controller from './controller'

const router = new Router({ prefix: '/auth' })

router
  .post('/', Controller.authenticate)

export default router
