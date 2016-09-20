'use strict'

module.exports.getOne = (roots, args, req) => {
  return new Promise((resolve, reject) => {
    mysql.models.Todo
      .findById(args.id)
      .then((todo) => {
        resolve(todo.get({plain: true}))
      })
      .catch((err) => {
        reject(err)
      })
  })
}

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