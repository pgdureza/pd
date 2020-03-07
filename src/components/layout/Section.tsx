import React from "react";
import styled from "styled-components";

const Root = styled.section`
  margin: 12rem auto;
  width: 100%;
  padding: 0 2.5rem;
`;

const Section: React.FC = ({ children }) => {
  return <Root>{children}</Root>;
};

export default Section;
