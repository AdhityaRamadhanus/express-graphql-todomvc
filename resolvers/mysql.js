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

module.exports.addTodo = (roots, args, req) => {
  return new Promise((resolve, reject) => {
    mysql.models.Todo
      .build({ title: args.title })
      .save()
      .then((createdTodo) => {
        resolve(createdTodo.get({plain: true}))
      }).catch((err) => {
        reject(err)
      })
  })
}

module.exports.deleteAllCompletedTodo = (roots, args, req) => {
  return new Promise((resolve, reject) => {
    async.waterfall([
      (cb) => {
        mysql.models.Todo
          .destroy({where: {completed: true}})
          .then(() => {
            cb()
          })
          .catch((err) => {
            cb(err)
          })
      },
      (cb) => {
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
      }
    ], (err, todos) => {
        if (err) reject(err)
        else resolve(todos)
      }
    )
  })
}

module.exports.deleteAllTodo = (roots, args, req) => {
  return new Promise((resolve, reject) => {
   mysql.models.Todo
    .destroy({where: {completed: true}})
    .then(() => {
      resolve('All Todos Deleted')
    })
    .catch((err) => {
      reject(err)
    })
  })
}

module.exports.deleteTodo = (roots, args, req) => {
  return new Promise((resolve, reject) => {
   mysql.models.Todo
    .findById(args.id)
    .then((todo) => {
      return todo.destroy()
    })
    .then((todo) => {
      resolve(todo.get({plain: true}))
    })
    .catch((err) => {
      reject(err)
    })
  })
}

module.exports.toggleOne = (roots, args, req) => {
  return new Promise((resolve, reject) => {
    mysql.models.Todo
      .findOne({id: args.id})
      .then((todo) => {
        todo.setDataValue('completed',!todo.getDataValue('completed'))
        return todo.save()
      })
      .then((updatedTodo) => {
        resolve(updatedTodo.get({plain: true}))
      })
      .catch((err) => {
        reject(err)
      })
  })
}

module.exports.saveTodo = (roots, args, req) => {
  return new Promise((resolve, reject) => {
    mysql.models.Todo
      .findOne({id: args.id})
      .then((todo) => {
        todo.setDataValue('title', args.title)
        return todo.save()
      })
      .then((updatedTodo) => {
        resolve(updatedTodo.get({plain: true}))
      })
      .catch((err) => {
        reject(err)
      })
  })
}