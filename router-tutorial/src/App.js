import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";

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
      </ul>
      <hr />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
      </Routes>
    </div>
  );
};

export default App;
