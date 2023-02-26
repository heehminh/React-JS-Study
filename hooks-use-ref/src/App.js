import React, { useState, useRef } from "react";

const App = () => {
  // const [count, setCount] = useState(0);
  // const countRef = useRef(0); // countRef= current: 0;

  // console.log("렌더링...");
  // // 버튼을 누를때마다 App 리렌더링
  // const increaseCountState = () => {
  //   setCount(count + 1);
  // };

  // const increaseCountRef = () => {
  //   countRef.current = countRef.current + 1;
  //   console.log("Ref:", countRef.current);
  // };

  const [renderer, setRenderer] = useState(0);
  const countRef = useRef(0);
  let countVar = 0; // 렌더링 => 함수 내부의 변수 초기화

  const doRendering = () => {
    setRenderer(renderer + 1);
    // 버튼 클릭 => useState의 값 변경 => 렌더링 => 화면업데이트
  };

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log(`ref: ${countRef.current}`);
  };

  const increaseVar = () => {
    countVar = countVar + 1;
    console.log(`var: ${countVar}`);
  };

  const printResults = () => {
    console.log(`ref: ${countRef.current}, var: ${countVar}`);
  };

  // 렌더링이 되면(state를 업데이트) Ref에 저장된 값은 유지되나, let에 저장된 값은 초기화됨

  return (
    <div>
      {/* <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseCountState}>State 올려</button>
      <button onClick={increaseCountRef}>Ref 올려</button> */}
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={doRendering}>렌더!</button>
      <button onClick={increaseRef}>Ref 올려</button>
      <button onClick={increaseVar}>Var 올려</button>
      <button onClick={printResults}>Ref Var 값 출력</button>
    </div>
  );
};

export default App;
