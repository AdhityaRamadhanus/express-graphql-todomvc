'use strict'
const path = require('path')
const logger = require('morgan')
const cors = require('cors')
const loader = require('../helpers/loader').loadRoute

module.exports = (app, express) => {
  // app var
  app.set('port', process.env.PORT || 3000)
  app.set('env', process.env.NODE_ENV || 'development')

  // Middlewares setup
  app.use(logger('dev'))

  // App Routes
  loader(path.join(__dirname, '..', 'routes'), app)
}
