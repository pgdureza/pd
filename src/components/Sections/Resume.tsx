import React from "react";

import { faArrowDown, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { tada, pulse } from "react-animations";
import styled, { keyframes } from "styled-components";
import { Theme } from "src/lib";

const Root = styled.div`
  padding-top: 5rem;
`;

const Arrow = styled(FontAwesomeIcon)`
  font-size: 3rem;
  color: ${Theme.secondary};
  animation 1s ${keyframes`${tada}`} infinite;
`;

const CV = styled(FontAwesomeIcon)`
  cursor: pointer;
  font-size: 5rem;
  color: ${Theme.primary};
  transition: color 200ms;
  &:hover {
    animation 1s ${keyframes`${pulse}`} infinite;
    color: ${Theme.secondary};
  }
`;

const P = styled.p`
  padding: 2rem 0 1rem 0;
  font-size: 2rem;
  color: ${Theme.primary};
  font-family: ${Theme.fontFamily1};
`;

const Resume: React.FC = () => {
  return (
    <Root>
      <P>Click here to get a copy of my CV</P>
      <div>
        <Arrow icon={faArrowDown} />
      </div>
      <br />
      <a
        href="/static/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        <CV icon={faAddressCard} />
      </a>
    </Root>
  );
};

export default Resume;
