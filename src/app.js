// npm packages
import Koa from 'koa'
import KoaBodyparser from 'koa-bodyparser'
import KoaLogger from 'koa-logger'

// our packages
import router from './api/router'

const logger = require('debug')('terappia:app')

class App {
  constructor () {
    this.app = new Koa()

    this.middlewares()
    this.routes()
    // TODO: uncomment error handler
    // this.handleErrors()
  }

  // install app middlewares
  middlewares () {
    logger('configuring middlewares...')
    // install request body parser
    this.app.use(KoaBodyparser())

    // install logger
    this.app.use(KoaLogger())
  }

  // install routes
  routes () {
    logger('configuring routes...')

    this.app
      .use(router.routes())
      .use(router.allowedMethods())
  }

  handleErrors () {
    this.app
      .on(
        'error',
        (err, ctx) => {
          logger('Application error', err)
          logger('Error context', ctx)
        }
      )
  }

  // return app callback for http server
  boot () {
    return this.app.callback()
  }
}

export default new App()
