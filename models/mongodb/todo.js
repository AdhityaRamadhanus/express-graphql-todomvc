'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

var TodoSchema = Schema({
	title: {
		type: String,
    required: true
	},
  completed: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Todo', TodoSchema)

