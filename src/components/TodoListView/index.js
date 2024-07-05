import TodoContext from '../../context/TodoContext'
import TodoItem from '../TodoItem'
import './index.css'

const TodoListView = () => (
  <TodoContext.Consumer>
    {value => {
      const {todos} = value
      return (
        <ul className="todos-list">
          {todos.map(obj => <TodoItem key={obj.id} obj={obj} />)}
        </ul>
      )
    }}
  </TodoContext.Consumer>
)

export default TodoListView
