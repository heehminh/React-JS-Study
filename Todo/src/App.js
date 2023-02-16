import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Lists from "./components/Lists";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    // 1) form 안에 전송할 때 페이지 리로드되는 것 방지
    e.preventDefault();

    // 2) 새로운 할 일 데이터
    let newToDo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    // 3) 원래 있던 할 일에 새로운 할 일 더해주기 (전개연산자)
    // 입력란에 있던 글씨 지워주기
    setTodoData((prev) => [...prev, newToDo]);
    setValue("");
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
        </div>

        {/* props로 내려주기 */}
        <Lists todoData={todoData} setTodoData={setTodoData} />
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
      </div>
    </div>
  );
}
