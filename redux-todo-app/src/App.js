import React from "react";
import { styled } from "styled-components";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <Wrapper>
      <InputTodo />
      <TodoList />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  border: 1px solid gray;
  margin: 20px;
  padding: 20px;
  width: 40vw;
`;
