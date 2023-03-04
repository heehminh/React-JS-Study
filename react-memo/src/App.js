import "./App.css";
import { useState, useMemo } from "react";
import Child from "./Child";

function App() {
  const [parentAge, setParentAge] = useState(0);
  // const [childAge, setChildAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  // const incrementChildAge = () => {
  //   setChildAge(childAge + 1);
  // };

  console.log("부모 컴포넌트 렌더링");

  const name = useMemo(() => {
    return {
      lastName: "홍",
      firstName: "길동",
    };
  }, []);

  return (
    <div className="App" style={{ border: "2px solid navy", padding: "10px" }}>
      <h1>👨‍👩‍👧 부모</h1>
      <p>age: {parentAge}살</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      {/* <button onClick={incrementChildAge}>자녀 나이 증가</button> */}
      <Child name={name} />
    </div>
  );
}

export default App;
