import { useState } from "react";

export function App() {
  let inputValue;
  const [todos, setTodos] = useState([])

  function handleButtonClick() {
    if (typeof inputValue === "string" && inputValue.length > 0) {
      const nextTodo = todos.concat({
        description: inputValue,
        isDone: false
      });
      setTodos(nextTodo);
    }
  }

  function handleInputChange(event) {
    inputValue = event.target.value;
  }

  function handleCheckboxChange(todo) {
    const newTodo = {
      ...todo,
      isDone: !todo.isDone
    }
    const newTodos = todos.filter((t) => {
      return t.description !== todo.description
    })
    setTodos(newTodos.concat(newTodo))
  }

  return <div>
    <div>
      <input onChange={handleInputChange} type="text" />
      <button onClick={ handleButtonClick }>Добавить</button>
    </div>
    {
      todos.length <= 0 ? <h2>Задач нет</h2> : null
    }
    <ul>
      {
        todos.map((todo) => {
          return <li>
            <label>
              <input onChange={() => handleCheckboxChange(todo)} type="checkbox" checked={ todo.isDone }/>
              {
                todo.isDone
                ? <del>{ todo.description }</del>
                : <span>{ todo.description }</span>
              }
            </label>
          </li>
        })
        }
    </ul>
  </div>
}