import { useState, useEffect } from "react"
import TodoContext from "./context/TodoContext";
import AddTodo from "./components/AddTodo";
import TodoListView from './components/TodoListView'

import "./App.css";

const App = () => {
  const [todoList, updateTodoList] = useState(() => {
    const todosList = JSON.parse(localStorage.getItem("todoList"))
    if (todosList === null) {
      return []
    }
    return todosList
  })
  
  useEffect(() => {
      localStorage.setItem("todoList", JSON.stringify(todoList))
    }, [todoList]
  )

  const addTodo = newTodo => {
    if (newTodo.todo.trim() !== "") {
      updateTodoList((prevTodoList) => [...prevTodoList, newTodo])
    }
  }

  const updateTodo = id => {
    const newList = todoList.map(obj => obj.id === id ? {...obj, completed: !obj.completed} : obj)
    updateTodoList([...newList])
  }

  const deleteTodo = id => {
    const newList = todoList.filter((obj) => obj.id !== id)
    updateTodoList([...newList])
  }

  return (
    <TodoContext.Provider value={{ todos: [...todoList], addTodo, updateTodo, deleteTodo}}>
      <div className="main-todo-container">
        <AddTodo />
        <TodoListView />
      </div>
    </TodoContext.Provider>
  )
}

export default App
