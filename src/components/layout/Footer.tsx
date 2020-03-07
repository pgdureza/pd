import React from "react";
import styled from "styled-components";
import { Theme } from "src/lib";

const Root = styled.div`
  color: ${Theme.color5};
  background-color: ${Theme.color1};
`;

const Footer = () => {
  return <Root>Footer</Root>;
};

export default Footer;
