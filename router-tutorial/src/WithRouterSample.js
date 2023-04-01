import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const WithRouterSample = () => {
  const params = useParams(); // url에 대한 정보
  const location = useLocation(); // 현재 페이지에 대한 정보
  const navigate = useNavigate();
  const goHome = () => {
    navigate(-1);
  };
  return (
    <div>
      <h4>location</h4>
      <textarea value={JSON.stringify(location, null, 2)} readOnly />
      <h4>params</h4>
      <textarea value={JSON.stringify(params)} readOnly />
      <button onClick={goHome}>홈으로</button>
    </div>
  );
};

export default WithRouterSample;
