import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const Page = ({ isDark, setIsDark }) => {
  // Page 컴포넌트는 isDark, setIsDark 데이터를 필요로 하지 않는 중간 컴포넌트이다.

  return (
    <div className="page">
      <Header isDark={isDark} />
      <Content isDark={isDark} />
      <Footer isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
};

export default Page;
