import React from "react";
import styled from "styled-components";
import { Theme } from "src/lib";

interface IProps {
  title: string;
  list: string[];
}

const Chip = styled.div`
  background: ${Theme.secondary};
  color: ${Theme.white};
  display: inline-block;
  height: 32px;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
  padding: 0 1rem;
  line-height: 32px;
  font-weight: 500;
  border-radius: 10rem 3rem;
`;

const ListWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const H3 = styled.h3`
  color: ${Theme.darkgray};
`;

const Chips: React.FC<IProps> = ({ list, title }) => {
  return (
    <React.Fragment>
      <H3>{title}</H3>
      <ListWrapper>
        {list.map((item: string, index: number) => (
          <Chip key={index}>{item}</Chip>
        ))}
      </ListWrapper>
    </React.Fragment>
  );
};

export default Chips;
