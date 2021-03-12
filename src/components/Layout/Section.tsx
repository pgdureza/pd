import React from "react";
import styled from "styled-components";
import { Theme } from "src/lib";

const Root = styled.section<IStyleProps>`
  margin: auto;
  width: 100%;
  padding: 5rem 2.5rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  ${({ background }) => background && `background: ${background}`};
`;

const Header = styled.h2`
  font-family: ${Theme.fontFamily1};
  letter-spacing: 0.5rem;
  color: ${Theme.primary};
  text-align: center;
  font-weight: 600;
  margin-bottom: 5rem;
  font-size: 4rem;
`;

interface IStyleProps {
  background?: string;
}

interface IProps extends IStyleProps {
  title?: string;
  id: string;
}

const Section: React.FC<IProps> = ({ children, title, id, background }) => {
  return (
    <Root id={id} background={background}>
      {title && <Header>{title}</Header>}
      {children}
    </Root>
  );
};

export default Section;
