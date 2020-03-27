import React from "react";

import image from "src/images/sitting.svg";
import DualPanels from "../DualPanels";
import styled from "styled-components";
import { Theme } from "src/lib";
import AppDataContext from "../AppDataContext";

const Highlight = styled.span`
  color: ${Theme.color3};
`;

const P = styled.p`
  font-size: 1.5rem;
  line-height: 1.75;
`;

const AboutMe: React.FC = () => {
  const data = React.useContext(AppDataContext);
  return (
    <DualPanels
      content1={
        <React.Fragment>
          <h4 data-aos="fade-right">
            Hey, my name is <Highlight>{data.aboutMe.nameOnHeader}</Highlight>.
          </h4>
          <br />
          <P data-aos="fade-left">
            I am a web developer who has been in the industry since{" "}
            <Highlight>{data.aboutMe.devSince}</Highlight>. I love making
            responsive websites and web apps and I have worked on multiple
            projects using various tech stacks, but as of right now I am totally
            passionate about <Highlight>{data.aboutMe.favTech}</Highlight>!
          </P>
        </React.Fragment>
      }
      content2={<img data-aos="flip-up" src={image} alt="platforms" />}
    />
  );
};

export default AboutMe;
