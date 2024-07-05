import { useState } from "react";
import { v4 as uid } from "uuid";
import { IoMdAdd } from "react-icons/io"
import TodoContext from "../../context/TodoContext";
import './index.css'

const AddTodo = () => {
  const [inputText, setInputText] = useState("");
  return (
    <TodoContext.Consumer>
      {(value) => {
        const { addTodo } = value;

        const updateInput = (event) => setInputText(event.target.value);

        const addTodoObj = () => {
          addTodo({ id: uid(), todo: inputText, completed: false });
          setInputText("")
        };

        return (
          <div className="todo-input-box">
            <input
              type="text"
              placeholder="Add Todo"
              value={inputText}
              onChange={updateInput}
              className="todo-input-box"
            />
            <button type="button" onClick={addTodoObj}>
              <IoMdAdd />
            </button>
          </div>
        );
      }}
    </TodoContext.Consumer>
  );
};

export default AddTodo;
