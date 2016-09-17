'use strict'
const dotenv = require('dotenv')
const graphql = require ('graphql').graphql  
const express = require('express')
const app = express()

const setupApp = require('./setup/express')
const setupMongo = require('./setup/mongodb')
const mongoose = require('mongoose')

dotenv.config()
setupMongo(process.env.MONGODB_URI, mongoose)
setupApp(app, express)

app.listen(app.get('port'), () => {
  console.log('\n graphql server up, port : ' + app.get('port') + ' environment ' + app.get('env'))
})

module.exports = app