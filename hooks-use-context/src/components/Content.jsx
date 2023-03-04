import React from "react";

const Content = ({ isDark }) => {
  return (
    <header
      className="content"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>민희님, 좋은 하루 되세요</h1>
    </header>
  );
};

export default Content;
