// npm packages
import Router from 'koa-router'

// our packages
import Responder from './../utils/Responder'

const router = new Router()

const user = {
  id: 1,
  name: 'André Alves',
  email: 'dronept@gmail.com'
}

router.get(
  '/',
  ctx => {
    ctx.body = new Responder()
      .withData(user)
      .asError('Unable to update user', 1003)
  }
)

export default router
