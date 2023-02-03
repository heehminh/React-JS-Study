import React, { useState } from "react";
import "./App.css";
import List from "./components/List";

export default function App() {

  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");
  

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    // 1) form 안에 input을 전송할 때 페이지 리로드되는 것 방지 
    e.preventDefault();

    // 2) 새로운 할 일 데이터
    let newToDo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    // 3) 원래 있던 할 일에 새로운 할 일 더해주기 (전개연산자)
    // 입력란에 있던 글씨 지워주기 
    setTodoData(prev =>
      [...prev, newToDo]
    );
    setValue("");
  };

  return(
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>
        
        {/* props로 내려주기 */}
        <List todoData={todoData} setTodoData={setTodoData} />

        <form style={{display: "flex"}} onSubmit={handleSubmit}>
          <input
            type="text"
            name="value"
            style={{flex:"10", padding:"5px"}}
            placeholder="해야할 일을 입력하세요."
            value={value}
            onChange={handleChange}
            />
          <input 
            type="submit"
            value="입력"
            className="btn"
            style={{flex:"1"}}
            />
        </form>
      </div>
    </div>
  )
}