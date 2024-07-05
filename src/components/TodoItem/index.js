import {useState} from 'react'
import Popup from 'reactjs-popup'
import {MdDelete, MdDownloadDone, MdIncompleteCircle, MdModeEdit} from 'react-icons/md'
import { IoMdAdd } from "react-icons/io"
import TodoContext from "../../context/TodoContext"
import './index.css'

const TodoItem = props => {
  
  const {obj} = props

  const [editedTodoText,setEdit] = useState(obj.todo)
  return (
  <TodoContext.Consumer>
    {value => {
      const {deleteTodo, updateTodo, editTodo} = value
      const deleteTodos = () => {
        deleteTodo(obj.id)
      }

      const updateTodos = () => {
        updateTodo(obj.id)
      }      
      
      const editTodos = () => {
        editTodo(obj.id, editedTodoText)
      }

      const callEdit = event => {
        setEdit(event.target.value)
      }

      const todoState = obj.completed ? "incomplete" : "done"
      const todoCompleted = obj.completed ? "todo-box-completed" : null
      return (
        <li>
          <div className={`todo-box ${todoCompleted}`}>
            <p>{obj.todo}</p>
            <div className="todo-buttons-box">
	      <Popup trigger={
                <button type="button" className="edit-button"> <MdModeEdit /></button>
	      }
	      >
                 {close => (
                   <>
                     <div className="todo-input-box">
                       <input type="text" value={editedTodoText} onChange={callEdit} className="todo-input" />
                       <button type="button" onClick={editTodos}><IoMdAdd/></button>
                     </div>
                   </>
		 )}
	      </Popup>
             <button type="button" onClick={updateTodos} className={todoState}>{obj.completed ? <MdIncompleteCircle /> : <MdDownloadDone />}</button>
             <button type="button" onClick={deleteTodos}><MdDelete /></button> 
            </div>
          </div>
        </li>
      )
    }}
  </TodoContext.Consumer>
)
}
export default TodoItem
