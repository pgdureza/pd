import React from "react";

import TextyAnim from "rc-texty";
import breakpoint from "styled-components-breakpoint";
import background from "src/images/background.jpg";
import { Theme } from "src/lib";
import { lightSpeedIn, fadeInDown, pulse } from "react-animations";
import AppDataContext from "../AppDataContext";
import styled, { keyframes } from "styled-components";

const animations = {
  lightSpeedIn: keyframes`${lightSpeedIn}`,
  fadeInDown: keyframes`${fadeInDown}`,
  pulse: keyframes`${pulse}`
};

const Root = styled.div`
  min-height: 100vh;
  position: relative;
`;

const BackgroundImage = styled.div`
  background-image: url(${background});
  background-color: #b3b3b3;
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

const Overlay = styled.div`
  color: white;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  &:after {
    background: ${Theme.color1};
    content: " ";
    opacity: 0.25;
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  z-index: 1;
  text-align: center;
  animation 0.6s ${animations.pulse};
  animation-delay: 1.9s;
  ${breakpoint("md")`
    max-width: 70vw;
    text-align: left;
  `}
`;

const H1 = styled.h1`
  margin: 0;
  background: ${Theme.color3};
  text-transform: uppercase;
  width: 100%;
  font-size: 3rem;
  padding: 0.5rem 1rem;
  ${breakpoint("md")`
    font-size: 6vw;
    padding: 1vw 4vw;
  `}
`;

const AnimatedSpeedInName = styled.div`
  animation 1.2s ${animations.lightSpeedIn};
`;

const H2 = styled.h2`
  width: 100%;
  font-size: 2rem;
  padding-top: 0.5rem;
  ${breakpoint("md")`
    font-size: 3.5vw;
    padding: 1vw 4vw;
  `}
`;

const Hero = () => {
  const data = React.useContext(AppDataContext);
  return (
    <Root>
      <BackgroundImage />
      <Overlay>
        <TextContainer>
          <H1>
            <AnimatedSpeedInName>{data.name}</AnimatedSpeedInName>
          </H1>
          <H2>
            <TextyAnim duration={300} delay={800}>
              {data.position}
            </TextyAnim>
          </H2>
        </TextContainer>
      </Overlay>
    </Root>
  );
};

export default Hero;
