import React from "react";
import logo from "src/images/logo.png";

import styled from "styled-components";

const Root = styled.header`
  background-color: transparent;
  padding: 0.5rem 1.5rem;
  position: absolute;
  z-index: 2;
  width: 100%;
`;

const Logo = styled.img`
  width: 5rem;
`;

const Header = () => {
  return (
    <Root>
      <Logo src={logo} alt="logo" />
    </Root>
  );
};

export default Header;
