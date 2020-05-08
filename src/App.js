import React, { useState } from "react";
import Todos from "./Todos";
import AddNew from "./AddNew";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "buy milk" },
    { id: 2, content: "play mario kart" },
  ]);

  const onDeleteHandler = (id) => {
    console.log(id);
    const todosNew = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(todosNew);
  };

  const addTodoHandler = (inputValue) => {
    console.log(inputValue);
    const newTodo = { content: inputValue };
    newTodo.id = Math.random();
    setTodos((currentList) => [...currentList, newTodo]);
  };

  return (
    <div className="todo-app container">
      <h1 className="center blue-text">To Do List</h1>
      <Todos todos={todos} onDelete={onDeleteHandler} />
      <AddNew addTodo={addTodoHandler} />
    </div>
  );
}

export default App;
