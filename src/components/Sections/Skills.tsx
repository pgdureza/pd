import React from "react";

import Chips from "src/components/Chips";
import image from "src/images/skills.svg";
import DualPanels from "src/components/DualPanels";
import AppDataContext from "../AppDataContext";
import styled from "styled-components";

const ChipsWrapper = styled.div`
  margin-bottom: 2rem;
`;

const Skills = () => {
  const data = React.useContext(AppDataContext);
  return (
    <React.Fragment>
      <DualPanels
        content1={<img src={image} alt="Skills" data-aos="flip-down" />}
        content2={
          <div>
            {data.skills.map(({ header, items }) => (
              <ChipsWrapper data-aos="fade-right" key={header}>
                <Chips list={items} title={header} />
              </ChipsWrapper>
            ))}
          </div>
        }
      />
    </React.Fragment>
  );
};

export default Skills;
