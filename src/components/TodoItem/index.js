import {MdDelete, MdDownloadDone, MdIncompleteCircle} from 'react-icons/md'
import TodoContext from "../../context/TodoContext"
import './index.css'

const TodoItem = props => (
  <TodoContext.Consumer>
    {value => {
      const {deleteTodo, updateTodo} = value
      const {obj} = props
      const deleteTodos = () => {
        deleteTodo(obj.id)
      }

      const updateTodos = () => {
        updateTodo(obj.id)
      }      

      const todoState = obj.completed ? "incomplete" : "done"
      const todoCompleted = obj.completed ? "todo-box-completed" : null
      return (
        <li>
          <div className={`todo-box ${todoCompleted}`}>
            <p>{obj.todo}</p>
            <div className="todo-buttons-box">
             <button type="button" onClick={updateTodos} className={todoState}>{obj.completed ? <MdIncompleteCircle /> : <MdDownloadDone />}</button>
             <button type="button" onClick={deleteTodos}><MdDelete /></button> 
            </div>
          </div>
        </li>
      )
    }}
  </TodoContext.Consumer>
)

export default TodoItem
