import React from "react";

const Todos = ({ todos, onDelete }) => {
  console.log(todos);
  const todoList =
    todos.length > 0 ? (
      todos.map((todo) => {
        return (
          <div className="collection-item" key={todo.id}>
            <span
              onClick={() => {
                onDelete(todo.id);
              }}
            >
              {todo.content}
            </span>
          </div>
        );
      })
    ) : (
      <p className="center">You have no To Do's left, hurray! </p>
    );

  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
