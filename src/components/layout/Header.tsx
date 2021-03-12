import React from "react";
import ReactScroll from "react-scroll";

import styled, { css, keyframes } from "styled-components";
import { Theme } from "src/lib";
import { fadeIn } from "react-animations";

interface IProps {
  headerStyle: IHeaderStyle;
  activeLink?: string;
}

const animations = {
  fadeIn: keyframes`${fadeIn}`,
};

const LogoWrapper = styled.div`
  flex-shrink: 0;
  font-size: 2rem;
  font-family: ${Theme.heroFont};
`;

const Link = styled(ReactScroll.Link)<{ active?: boolean }>`
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      color: ${Theme.secondary};
    `};
`;

const Root = styled.header<IProps>`
  background-color: transparent;
  padding: 0.5rem 1.5rem;
  position: absolute;
  z-index: 2;
  width: 100%;
  position: fixed;
  transition: background 0.2s, box-shadow 0.2s, text-shadow 0.2s;
  display: flex;
  justify-content: space-between;
  animation: ${animations.fadeIn} 2s;
  ${({ headerStyle }) => css`
    ${headerStyle === "solid" &&
    `
        ${Link}{
          color: ${Theme.primary};
        }
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12);
        background: ${Theme.white};
      `};
    ${headerStyle === "transparent" &&
    `
        ${Link}{
          color: ${Theme.white};
        }
        text-shadow: 1px 1px black;
        background: transparent;
      `};
  `};
`;

const RightLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${Link} {
    margin-left: 1rem;
    &:hover,
    &:active,
    &:focus,
    &.active {
      color: ${Theme.secondary};
      transform: scale(1.05);
    }
    transition: color 0.5s, transform 0.5s;
  }
`;

const Header: React.FC<IProps> = ({ headerStyle, activeLink }) => {
  return (
    <Root headerStyle={headerStyle}>
      <LogoWrapper>
        <Link to="hero" smooth={true} duration={500}>
          PGD
        </Link>
      </LogoWrapper>

      <RightLinks>
        <Link
          active={activeLink === "me"}
          to="me"
          offset={1}
          smooth={true}
          duration={500}
        >
          Me
        </Link>
        <Link
          active={activeLink === "skills"}
          activeClass="active"
          to="skills"
          smooth={true}
          duration={500}
        >
          Skills
        </Link>
        <Link
          active={activeLink === "career"}
          activeClass="active"
          to="career"
          smooth={true}
          duration={500}
        >
          Career
        </Link>
        <Link
          active={activeLink === "contact"}
          activeClass="active"
          to="contact"
          smooth={true}
          duration={500}
        >
          Contact
        </Link>
      </RightLinks>
    </Root>
  );
};

export type IHeaderStyle = "transparent" | "solid";
export default Header;
