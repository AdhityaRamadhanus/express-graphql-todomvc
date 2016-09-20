'use strict'
const dotenv = require('dotenv')
const graphql = require ('graphql').graphql  
const express = require('express')
const Sequelize = require('sequelize')
const app = express()

const setupApp = require('./setup/express')
const setupMongo = require('./setup/mongodb')
const setupMySql = require('./setup/mysql')
const mongoose = require('mongoose')

dotenv.config()
setupMongo(process.env.MONGODB_URI, mongoose)
// Will set global variable mysql
setupMySql(Sequelize, process.env.MYSQL_URI)
setupApp(app, express)

app.listen(app.get('port'), () => {
  console.log('\n graphql server up, port : ' + app.get('port') + ' environment ' + app.get('env'))
})

module.exports = app