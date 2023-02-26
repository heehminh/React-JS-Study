import React, { useState, useRef, useEffect } from "react";

const App = () => {
  // 예제 1: useState와 useRef 비교
  const [count, setCount] = useState(0);
  const countRef = useRef(0); // countRef= current: 0;

  // console.log("렌더링...");
  // 버튼을 누를때마다 App 리렌더링
  const increaseCountState = () => {
    setCount(count + 1);
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref:", countRef.current);
  };

  /* 예제 2: 일반 변수, useRef 비교 */
  const [renderer, setRenderer] = useState(0);
  const countRef2 = useRef(0);
  let countVar = 0; // 렌더링 => 함수 내부의 변수 초기화

  const doRendering = () => {
    setRenderer(renderer + 1);
    // 버튼 클릭 => useState의 값 변경 => 렌더링 => 화면업데이트
  };

  const increaseRef = () => {
    countRef2.current = countRef2.current + 1;
    console.log(`ref: ${countRef2.current}`);
  };

  const increaseVar = () => {
    countVar = countVar + 1;
    console.log(`var: ${countVar}`);
  };

  const printResults = () => {
    console.log(`ref: ${countRef2.current}, var: ${countVar}`);
  };

  // 렌더링이 되면(state를 업데이트) Ref에 저장된 값은 유지되나, let에 저장된 값은 초기화됨

  // 예제 3: useEffect로 render되었을때 카운트 저장
  // 카운트 저장공간: renderCount(Ref)
  // 카운트를 State에 저장하면 무한반복으로 오류가 남 (state 업데이트 -> 렌더링 -> state 업데이트 -> 렌더링 -> ...)
  const [count3, setCount3] = useState(1);
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log("렌더링 수: ", renderCount.current);
  });

  return (
    <div>
      <div>
        예제 1: useState와 useRef 비교
        <p>State: {count}</p>
        <p>Ref: {countRef.current}</p>
        <button onClick={increaseCountState}>State 올려</button>
        <button onClick={increaseCountRef}>Ref 올려</button>
      </div>
      <div>
        {" "}
        <br />
        예제 2: 일반 변수, useRef 비교
        <p>Ref: {countRef2.current}</p>
        <p>Var: {countVar}</p>
        <button onClick={doRendering}>렌더!</button>
        <button onClick={increaseRef}>Ref 올려</button>
        <button onClick={increaseVar}>Var 올려</button>
        <button onClick={printResults}>Ref Var 값 출력</button>
      </div>
      <div>
        <br />
        예제 3:
        <p>Count: {count3}</p>
        <button onClick={() => setCount3(count3 + 1)}>올려</button>
      </div>
    </div>
  );
};

export default App;
