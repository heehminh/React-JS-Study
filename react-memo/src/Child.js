import React, { memo } from "react";

const Child = ({ name, tellMe }) => {
  console.log("자녀 컴포넌트 렌더링");

  return (
    <div style={{ border: "2px solid powderblue", padding: "18px" }}>
      <h2>👼 자녀</h2>
      <p>이름: {name}</p>
      <button onClick={tellMe}>내 이름은?</button>
    </div>
  );
};

export default memo(Child);
