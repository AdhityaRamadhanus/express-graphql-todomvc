const graphql = require ('graphql')
const mongoResolver = require('../helpers/mongoresolver')
var TodoType = new graphql.GraphQLObjectType({  
  name: 'todo',
  fields: {
    id: {
      type: graphql.GraphQLID
    },
    title: {
      type: graphql.GraphQLString
    },
    completed: {
      type: graphql.GraphQLBoolean
    }
  }
})

var queryType = new graphql.GraphQLObjectType({  
  name: 'Query',
  fields: {
    todos: {
      type: new graphql.GraphQLList(TodoType),
      resolve: mongoResolver.getAll
    }
  }
})

var MutationAdd = {  
  type: TodoType,
  description: 'Add a Todo',
  args: {
    title: {
      name: 'Todo title',
      type: new graphql.GraphQLNonNull(graphql.GraphQLString)
    }
  },
  resolve: mongoResolver.addTodo
}

var MutationDelete = {
  type: TodoType,
  description: 'Delete a todo',
  args: {
    id: {
      name: 'Todo id',
      type: graphql.GraphQLID
    }
  },
  resolve: mongoResolver.deleteTodo
}

var MutationType = new graphql.GraphQLObjectType({  
  name: 'Mutation',
  fields: {
    add: MutationAdd,
    delete: MutationDelete
  }
})

module.exports = new graphql.GraphQLSchema({  
  query: queryType,
  mutation: MutationType
})
