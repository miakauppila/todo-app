import React, { useState, useEffect } from "react";
import Todos from "./components/Todos";
import AddNew from "./components/AddNew";
import { v4 as uuidv4 } from "uuid";

function App() {
  const localData = () => {
    const getLocalData = localStorage.getItem("todos");
    return getLocalData ? JSON.parse(getLocalData) : [];
  };

  const [todos, setTodos] = useState(localData);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
    newTodo.id = uuidv4();
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
