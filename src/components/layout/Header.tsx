import React from "react";
import logo from "src/images/logo.png";
import ReactScroll from "react-scroll";

import styled, { css, keyframes } from "styled-components";
import { Theme } from "src/lib";
import { fadeIn } from "react-animations";

const animations = {
  fadeIn: keyframes`${fadeIn}`
};

export type IHeaderStyle = "transparent" | "solid";
interface IProps {
  headerStyle: IHeaderStyle;
  activeLink?: string;
}
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
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12);
        background: ${Theme.white};
      `};
    ${headerStyle === "transparent" &&
      `
        text-shadow: 1px 1px black;
        background: transparent;
      `};
  `};
`;

const Logo = styled.img`
  width: 5rem;
`;

const Link = styled(ReactScroll.Link)<{ active?: boolean }>`
  cursor: pointer;
  color: ${Theme.color1};
  ${({ active }) =>
    active &&
    css`
      color: ${Theme.color3};
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
      color: ${Theme.color3};
      transform: scale(1.05);
    }
    transition: color 0.5s, transform 0.5s;
  }
`;

const LogoWrapper = styled.div`
  flex-shrink: 0;
`;

const Header: React.FC<IProps> = ({ headerStyle, activeLink }) => {
  return (
    <Root headerStyle={headerStyle}>
      <LogoWrapper>
        <Link to="hero" smooth={true} duration={500}>
          <Logo src={logo} alt="logo" />
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
          active={activeLink === "projects"}
          activeClass="active"
          to="projects"
          smooth={true}
          duration={500}
        >
          Projects
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

export default Header;
