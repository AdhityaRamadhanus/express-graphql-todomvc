'use strict'
var describe = require('mocha').describe
var it = require('mocha').it
require('should')
var server = require('../server')
var supertest = require('supertest')

describe('Graphql Endpoint', () => {
  it('Can get todos', (done) => {
    supertest(server)
      .post('/graphql')
      .set('Content-Type', 'Application/graphql')
      .send('query { todos { id, completed, title } }')
      .end(function (err, res) {
        if (err) {
          throw err
        }
        res.status.should.equal(200)        
        done()
      })
  })
  it('Can add todo', (done) => {
    var queryString = 'mutation { add (title: "Testing Lagi") { id, completed, title } }' 
    supertest(server)
      .post('/graphql')
      .set('Content-Type', 'Application/graphql')
      .send(queryString)
      .end(function (err, res) {
        if (err) {
          throw err
        }
        res.status.should.equal(200)        
        done()
      })
  })
})
