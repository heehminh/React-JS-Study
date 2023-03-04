import "./App.css";
import { useState, useCallback } from "react";
import Child from "./Child";

function App() {
  const [parentAge, setParentAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  console.log("부모 컴포넌트 렌더링");

  const tellMe = useCallback(() => {
    console.log("길동이!");
  }, []);

  return (
    <div className="App" style={{ border: "2px solid navy", padding: "10px" }}>
      <h1>👨‍👩‍👧 부모</h1>
      <p>age: {parentAge}살</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <Child name={"홍길동"} tellMe={tellMe} />
    </div>
  );
}

export default App;
