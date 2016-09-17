const mongoose = require('mongoose')
const Todo = mongoose.model('Todo')

module.exports.getAll = (roots, args, req) => {
	return new Promise((resolve, reject) => {
    Todo.find({}, (err, todos) => {
      if (err) reject(err)
      else resolve(todos)
    })
  })
}

module.exports.addTodo = (roots, args, req) => {
  return new Promise((resolve, reject) => {
    var newTodo = new Todo({
      title: args.title
    })
    newTodo.save((err, createdTodo) => {
      if (err) reject(err)
      else resolve(createdTodo)
    })
  })
}

module.exports.deleteTodo = (roots, args, req) => {
  return new Promise((resolve, reject) => {
   Todo.findByIdAndRemove(args.id, (err, removedTodo) => {
    if (err) reject(err)
    else if (!removedTodo) reject(new Error('Todos Not Found!'))
    else resolve(removedTodo)
   }) 
  })
}