// import React, { FC, useState } from "react";
// import "../src/App.css";
// function App() {
//   const [value, setValue] = useState<string>("");

//   const [todoStore, setTodoStore] = useState<ListTodo[]>([]);
//   type formEvent = React.FormEvent<HTMLFormElement>;

//   interface ListTodo {
//     item: string;
//     done: boolean;
//   }
//   const onSubmitHandle = (e: formEvent) => {
//     e.preventDefault();
//     newTodoAdd(value);
//   };

//   const newTodoAdd = (todoItem: string) => {
//     const addNewTodo: ListTodo[] = [
//       { item: todoItem, done: false },
//       ...todoStore,
//     ];

//     setTodoStore(addNewTodo);
//   };

//   const handleComp = (index: number) => {
//     const newTodoItem: ListTodo[] = [...todoStore];
//     newTodoItem[index].done = !newTodoItem[index].done;

//     setTodoStore(newTodoItem);
//   };

//   const removeTodoItem = (index: number) => {
//     const remainTodo: ListTodo[] = [...todoStore];
//     remainTodo.splice(index, 1);

//     setTodoStore(remainTodo);
//   };
//   return (
//     <div className="App">
//       <h2>Todo List</h2>
//       <form onSubmit={onSubmitHandle}>
//         <input
//           type="text"
//           placeholder="todo"
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//         />
//         <button>Add</button>
//       </form>
//       <ul>
//         {todoStore.map((itm: ListTodo, index: number) => {
//           return (
//             <li>
//               {itm.item}
//               <button onClick={() => handleComp(index)}>
//                 {itm.done ? "incomplete" : "complete"}
//               </button>
//               <button onClick={() => removeTodoItem(index)}>remove</button>;
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// export default App;
import React, { FC, useState, useRef, useEffect } from "react";
import "./App.css";
function App() {
  const [value, setValue] = useState<string>("");

  const [todoStore, setTodoStore] = useState<Todo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (null !== inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  interface Todo {
    item: string;
  }

  const addNewTodo = (item: string) => {
    const newTodo: Todo[] = [{ item: item }, ...todoStore];

    setTodoStore(newTodo);
    setValue("");
    console.log(newTodo);
  };

  const deleteItem = (index: number) => {
    const remainItem: Todo[] = [...todoStore];
    remainItem.splice(index, 1);

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
        {todoStore.map((item: Todo, index: number) => {
          return (
            <li className="item">
              {item.item}
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
