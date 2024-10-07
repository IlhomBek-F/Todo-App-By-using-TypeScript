import React, { FC, useState, useRef, useEffect } from "react";
import "./App.css";

 type Todo = {
    name: string;
    id: number
  }

function App() {
  const [value, setValue] = useState<string>("");
  const [todoStore, setTodoStore] = useState<Todo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (null !== inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const addNewTodo = (name: string) => {
    const newTodo: Todo[] = [{ name, id: todoStore.length + 1}, ...todoStore];

    setTodoStore(newTodo);
    setValue("");
  };

  const deleteItem = (id: number) => {
    const remainItem: Todo[] = todoStore.filter((todo) => todo.id !== id);

    setTodoStore(remainItem);
  };
  return (
    <div className="App__todo">
      <h3>Todo App</h3>
      <div className="input__div">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          ref={inputRef}
        />
        <button onClick={() => addNewTodo(value)}>Add</button>
      </div>
      <ul className="ul">
        {todoStore.map((todo: Todo, index: number) => {
          return (
            <li className="item" key={todo.id}>
              {todo.name}
              <button onClick={() => deleteItem(index)} className="delete">
                x
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
