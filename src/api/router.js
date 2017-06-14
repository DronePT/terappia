// npm packages
import Router from 'koa-router'

// our packages
import Responder from './../utils/Responder'

// api routing
import { Auth } from './modules'

const router = new Router()

// install Auth module routing
router.use(Auth.Router.routes())

router.get(
  '/',
  ctx => {
    ctx.body = new Responder()
      .withData({ version: '0.0.1' })
  }
)

export default router
