import React from "react";
import styled from "styled-components";
import { Theme } from "src/lib";

const Root = styled.section`
  margin: auto;
  width: 100%;
  padding: 8rem 2.5rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Header = styled.h2`
  color: ${Theme.color3};
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 5rem;
`;

interface IProps {
  title?: string;
  id: string;
}

const Section: React.FC<IProps> = ({ children, title, id }) => {
  return (
    <Root id={id}>
      {title && <Header>{title}</Header>}
      {children}
    </Root>
  );
};

export default Section;
