import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, complete } from "../redux/todoSlice";
import styled from "styled-components";

const TodoList = () => {
  const todoList = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const todoListView = todoList.map((todo, index) => (
    <Item key={todoList[index].id}>
      <input
        type="checkbox"
        onChange={() => dispatch(complete(todoList[index].id))}
      />
      <div>
        {todo.complete === false ? (
          <div>{todo.text}</div>
        ) : (
          <Done>{todo.text}</Done>
        )}
      </div>
      <button
        type="button"
        onClick={() => dispatch(remove(todoList[index].id))}
      >
        X
      </button>
    </Item>
  ));

  return <div>{todoListView}</div>;
};

export default TodoList;

const Item = styled.li`
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

const Done = styled.div`
  font-style: italic;
  text-decoration: line-through;
  color: gray;
`;
