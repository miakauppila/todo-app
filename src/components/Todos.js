import React from "react";

const Todos = ({ todos, onDelete }) => {
  console.log(todos);
  const todoList =
    todos.length > 0 ? (
      todos.map((todo) => {
        return (
          <li className="collection-item" key={todo.id}>
            <div style={{ lineHeight: "40px" }}>
              {todo.content}
              <button
                style={{}}
                onClick={() => {
                  onDelete(todo.id);
                }}
                className="secondary-content btn-floating waves-effect waves-light"
              >
                <i className="material-icons">delete</i>
              </button>
            </div>
          </li>
        );
      })
    ) : (
      <p className="center">You have no To Do's left, well done! </p>
    );

  return <ul className="todos collection">{todoList}</ul>;
};

export default Todos;
