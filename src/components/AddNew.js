import React, { useState } from "react";

const AddNew = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label>Add a new to do:</label>
        <input type="text" onChange={onChangeHandler} value={inputValue} />
        <button className="waves-effect waves-light btn">ADD</button>
      </form>
    </div>
  );
};

export default AddNew;
