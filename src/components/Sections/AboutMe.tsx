import React from "react";

import image from "src/images/me.jpg";
import DualPanels from "../DualPanels";
import styled from "styled-components";
import { Theme } from "src/lib";
import AppDataContext from "../AppDataContext";

const Highlight = styled.span`
  color: ${Theme.secondary};
`;

const Root = styled.div`
  max-width: 60rem;
`;

const P = styled.p`
  font-size: 1.5rem;
  line-height: 1.75;
  color: ${Theme.darkgray};
`;

const ImgOverlay = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${Theme.secondary};
  opacity: 0.15;
  border-radius: 100%;
`;

const ImgWrapper = styled.div`
  position: relative;
`;

const H3 = styled.h3`
  font-family: ${Theme.fontFamily1};
  letter-spacing: 0.5rem;
  font-size: 6rem;
`;

const Img = styled.img`
  background: ${Theme.lightgray};
  border-radius: 100%;
`;

const AboutMe: React.FC = () => {
  const data = React.useContext(AppDataContext);
  return (
    <Root>
      <DualPanels
        content1={
          <React.Fragment>
            <H3 data-aos="fade-right">Hey there!</H3>
            <br />
            <P data-aos="fade-left">
              My name is <Highlight>{data.aboutMe.nameOnHeader}</Highlight>. I'm
              a {data.position} who has been in the industry since{" "}
              <Highlight>{data.aboutMe.devSince}</Highlight>.
            </P>
          </React.Fragment>
        }
        content2={
          <ImgWrapper data-aos="flip-up">
            <Img src={image} alt="platforms" />
            <ImgOverlay />
          </ImgWrapper>
        }
      />
    </Root>
  );
};

export default AboutMe;
