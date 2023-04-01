import React from "react";
import { Routes, Link, Route } from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
  return (
    <div>
      <h3>유저 목록:</h3>
      <ul>
        <li>
          <Link to="/profiles/anna">anna</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">gildong</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element="유저를 선택해주세요"></Route>
        <Route path="/:username" element={<Profile />}></Route>
      </Routes>
      <WithRouterSample />
    </div>
  );
};

export default Profiles;
