import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";
import styled from "styled-components";

const Page1 = () => {
  const [rotate, setRotate] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: rotate ? 1 : 0,
    transform: `perspective(500px) rotateX(${rotate ? 180 : 0}deg)`,
  });

  const onClickRotate = () => {
    setRotate((prev) => !prev);
  };

  return (
    <Container>
      <Wrapper onClick={onClickRotate}>
        <animated.div
          style={{ opacity: opacity.to((o) => 1 - o), transform }}
        />
        <animated.span style={{ opacity, transform, rotateX: "180deg" }} />
      </Wrapper>
    </Container>
  );
};

export default Page1;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 82%;
  height: 80%;
  position: relative;

  div {
    display: flex;
    width: 500px;
    height: 300px;
    background-color: black;
    position: absolute;
    opacity: 1;
    cursor: pointer;

    ::before {
      content: "앞면입니다.";
      color: white;
    }
  }

  span {
    display: flex;
    width: 500px;
    height: 300px;
    background-color: pink;
    position: absolute;
    opacity: 0;
    cursor: pointer;

    ::before {
      content: "뒷면입니다";
    }
  }
`;
