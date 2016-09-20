'use strict'
module.exports = (Sequelize, dbURI) => {
  var sequelize = new Sequelize(dbURI)
  var models = {}
  var todoModel = sequelize.import('../models/mysql/todo')
  models['Todo'] = todoModel
  sequelize
    .sync()
    .then(() => {
      console.log('connected to mysql')
      global.mysql = {
        models: models,
        sequelize: sequelize
      }
    })
    .catch((err) => {
      console.log('error mysql sequelize', err)
    })
}