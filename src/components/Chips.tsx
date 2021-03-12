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
          <Chip className="chip" key={index}>
            {item}
          </Chip>
        ))}
      </ListWrapper>
    </React.Fragment>
  );
};

export default Chips;
