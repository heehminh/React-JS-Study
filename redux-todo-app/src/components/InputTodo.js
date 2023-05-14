import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/todoSlice";

const InputTodo = () => {
  const dispatch = useDispatch();
  const [todolist, setTodolist] = useState({ id: 0, text: "" });

  const handleText = (e) => {
    setTodolist({ text: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todolist.text !== "") {
      dispatch(add(todolist.text));
    }
    setTodolist({ text: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" value={todolist.text} onChange={handleText} />
          <button type="submit">+</button>
        </div>
      </form>
    </div>
  );
};

export default InputTodo;
