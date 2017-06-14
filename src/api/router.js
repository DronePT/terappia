// npm packages
import Router from 'koa-router'

// our packages
import Responder from './../utils/Responder'

const router = new Router()

router.get(
  '/',
  ctx => {
    ctx.body = new Responder()
      .withData({ version: '0.0.1' })
  }
)

export default router
