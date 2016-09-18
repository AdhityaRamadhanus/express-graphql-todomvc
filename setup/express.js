'use strict'
const path = require('path')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('express-cors')
const loader = require('../helpers/loader').loadRoute

module.exports = (app, express) => {
  // app var
  app.set('port', process.env.PORT || 3000)
  app.set('env', process.env.NODE_ENV || 'development')

  // Middlewares setup
  app.use(logger('dev'))

  app.use(cors({
    allowedOrigins: [
        'http://localhost:9966'
    ]
  }))
  // App Routes
  loader(path.join(__dirname, '..', 'routes'), app)
}
