import React from "react";
import styled from "styled-components";
import { Theme } from "src/lib";
import { ContactMe } from "src/components/Sections";

const Root = styled.div`
  color: ${Theme.white};
  background-color: ${Theme.primary};
  min-height: 101vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1.5rem;
`;

interface IProps {
  id: string;
}

const Footer: React.FC<IProps> = ({ id }) => {
  return (
    <Root id={id}>
      <p>You can reach me through:</p>
      <br />
      <div>
        <ContactMe />
      </div>
    </Root>
  );
};

export default Footer;
