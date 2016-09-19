'use strict'

const express = require('express')
const graphqlMiddleware = require('express-graphql')
const router = express.Router()
const Schema = require('../models/graphql')
const cors = require('cors')

router.options('/', cors())
router.all('/', 
  cors(),
  graphqlMiddleware({
    schema: Schema,
    pretty: true
  })
)

module.exports = router