import React, { useEffect } from "react";

const Timer = (props) => {
  useEffect(() => {
    // 타이머 컴포넌트가 브라우저에 처음 렌더링될때 1회만 실행
    // 디펜던시 arr에 빈배열을 넣어줬기 때문에
    const timer = setInterval(() => {
      console.log("타이머 돌아가는중...");
    }, 1000);

    return () => {
      // showTimer가 false일때 타이머를 중지시킴
      clearInterval(timer);
      console.log("타이머가 종료되었습니다.");
    };
  }, []);

  return (
    <div>
      <span>타이머를 시작합니다. 콘솔을 보세요!</span>
    </div>
  );
};

export default Timer;
