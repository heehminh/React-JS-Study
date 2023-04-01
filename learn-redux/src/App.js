import React from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <p>숫자: {count}</p>
      <button
        onClick={() => {
          dispatch({ type: "증가" });
        }}
      >
        더하기
      </button>
    </div>
  );
};

export default App;
