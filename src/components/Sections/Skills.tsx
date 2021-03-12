import React from "react";

import Chips from "src/components/Chips";
import image from "src/images/skills.svg";
import DualPanels from "src/components/DualPanels";
import AppDataContext from "../AppDataContext";

const Skills = () => {
  const data = React.useContext(AppDataContext);
  return (
    <React.Fragment>
      <DualPanels
        content1={<img src={image} alt="Skills" data-aos="flip-down" />}
        content2={
          <div>
            {data.skills.map(({ header, items }) => (
              <div data-aos="fade-right" key={header}>
                <Chips list={items} title={header} />
              </div>
            ))}
          </div>
        }
      />
    </React.Fragment>
  );
};

export default Skills;
