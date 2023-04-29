import React from "react";
import { Route, Routes, Link, useLocation, NavLink } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

const App = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => ({ color: isActive ? "red" : "green" })}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>

        <li>
          <Link to="/history">예제</Link>
        </li>
      </ul>

      <hr />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/profiles/*" Component={Profiles} />
        <Route path="/history" Component={HistorySample} />
        <Route
          path="/*"
          element={<h1>이 페이지는 존재하지 않습니다. - {pathname}</h1>}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
