import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profiles from "./Profiles";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/profiles/*" Component={Profiles} />
      </Routes>
    </div>
  );
};

export default App;
