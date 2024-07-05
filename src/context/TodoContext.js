import React from 'react'

const TodoContext = React.createContext({
  todos: [],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
})

export default TodoContext
