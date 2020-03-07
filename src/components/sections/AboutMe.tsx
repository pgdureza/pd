import React from "react";

import image from "src/images/sitting.svg";
import TwoPanels from "../TwoPanels";
import styled from "styled-components";
import { Theme } from "src/lib";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Highlight = styled.span`
  color: ${Theme.color3};
`;

const Link = styled.a`
  background: ${Theme.color3};
  &:hover,
  &:focus,
  &:active {
    background: ${Theme.color3};
  }
`;

const P = styled.p`
  font-size: 1.5rem;
  line-height: 1.75;
`;

const AboutMe: React.FC = () => {
  return (
    <TwoPanels
      content1={
        <React.Fragment>
          <h4>
            Hey, my name is <Highlight>Patrick</Highlight>.
          </h4>
          <br />
          <P>
            I am a web developer who has been in the industry since{" "}
            <Highlight>June 2011</Highlight>. I love making responsive websites
            and web apps and I have worked on multiple projects using various
            tech stacks, but as of right now I am totally passionate about{" "}
            <Highlight>Javascript</Highlight>!
          </P>
        </React.Fragment>
      }
      content2={<img src={image} alt="platforms" />}
    />
  );
};

const LinkedIn = () => {
  return (
    <div>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/tikdureza/"
        className="btn-large waves-effect"
      >
        <i className="material-icons">
          <FontAwesomeIcon icon={faLinkedinIn} size="1x" />
        </i>
      </Link>
    </div>
  );
};

export default AboutMe;
