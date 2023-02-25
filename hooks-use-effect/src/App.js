import React, { useState, useEffect } from "react";
import Timer from "./component/Timer";

function App() {
  // (1) useEffect 사용법
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // 렌더딩될때마다 매번 실행됨
  // 업데이트 버튼 => setCount => state가 update 됨 => 리렌더링
  // handleInputChange 가 실행될때마다 (인풋값에 변화생길때마다)
  useEffect(() => {
    // 콜백함수
    console.log("카운트, 인풋이 업데이트될때 모두 실행됨");
  });

  // 두번째 인자 배열 (디펜더시 array 추가)
  // 1. 맨 처음 컴포넌트가 화면에 렌더링될때 (마운트)
  // 2. 디펜더시 array인 카운트가 업데이트될때 (업데이트)
  // useEffect 실행됨
  useEffect(() => {
    console.log("count 변화");
  }, [count]);

  useEffect(() => {
    console.log("name 변화");
  }, [name]);

  // 맨 처음 마운팅될때만 useEffect를 호출하고 싶다면
  // 디펜더시 array에 빈배열을 넣어준다
  useEffect(() => {
    console.log("마운트될때만 1회실행");
  }, []);

  // (2) cleanUp 사용법
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      <div>
        (1) useEffect 사용법 <br />
        <button onClick={handleCountUpdate}>Update</button>
        <span>count: {count}</span>
        <input type="text" value={name} onChange={handleInputChange} />
        <span>{name}</span>
      </div>
      <br />

      <div>
        (2) cleanUp 사용법 <br />
        {showTimer && <Timer />} {/* showTimer가 true일때만 */}
        <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
      </div>
    </div>
  );
}

export default App;
