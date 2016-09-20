'use strict'

module.exports.getAll = (roots, args, req) => {
	return new Promise((resolve, reject) => {
    mysql.models.Todo
      .findAll({attributes: ['id', 'title', 'completed']})
      .then((todos) => {
        var plainTodos = todos.map((todo) => {
          return todo.get({plain: true})
        })
        resolve(plainTodos)
      })
      .catch((err) => {
        reject(err)
      })
  })
}