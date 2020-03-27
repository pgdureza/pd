import React from "react";
import styled from "styled-components";
import { Theme } from "src/lib";

interface IProps {
  title: string;
  list: string[];
}

const Chip = styled.div`
  background: ${Theme.color3};
  color: ${Theme.white};
`;

const ListWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const Chips: React.FC<IProps> = ({ list, title }) => {
  return (
    <React.Fragment>
      <h3>{title}</h3>
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
