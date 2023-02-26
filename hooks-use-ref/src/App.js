import React, { useState, useRef } from "react";

const App = () => {
  // 예제 1: useState와 useRef 비교
  const [count, setCount] = useState(0);
  const countRef = useRef(0); // countRef= current: 0;

  console.log("렌더링...");
  // 버튼을 누를때마다 App 리렌더링
  const increaseCountState = () => {
    setCount(count + 1);
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref:", countRef.current);
  };

  return (
    <div>
      예제 1: useState와 useRef 비교
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseCountState}>State 올려</button>
      <button onClick={increaseCountRef}>Ref 올려</button>
    </div>
  );
};

export default App;
