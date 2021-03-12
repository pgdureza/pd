import React from "react";

import styled from "styled-components";
import { Theme } from "src/lib";
import breakpoint from "styled-components-breakpoint";

const Root = styled.div`
  margin: 0 auto;
  text-align: center;
  color: ${Theme.primary};
  ${breakpoint("md")`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  `}
`;

const Content = styled.div`
  padding-bottom: 4rem;
  ${breakpoint("md")`
    width: 50%;
    padding: 0 1rem;
  `};
  ${breakpoint("lg")`
    padding: 0 5rem;
  `};
`;

interface IProps {
  content1: React.ReactNode;
  content2: React.ReactNode;
}

const DualPanels: React.FC<IProps> = ({ content1, content2 }) => {
  return (
    <Root>
      <Content>{content1}</Content>
      <Content>{content2}</Content>
    </Root>
  );
};

export default DualPanels;
