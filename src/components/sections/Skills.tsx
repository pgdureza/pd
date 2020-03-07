import React from "react";

import Chips from "src/components/Chips";
import image from "src/images/skills.svg";
import TwoPanels from "src/components/TwoPanels";

const CODING = [
  "html",
  "css",
  "javascript",
  "typescript",
  "react",
  "redux",
  "nodejs"
];

const TESTING = ["cypress", "jest", "enzyme", "react-testing-library"];

const PLATFORMS = ["Shopify", "Salesforce CommerceCloud", "Hubspot"];

const Skills = () => {
  return (
    <TwoPanels
      content1={<img src={image} alt="Skills" />}
      content2={
        <div>
          <Chips list={CODING} title="Coding" />
          <Chips list={TESTING} title="Testing" />
          <Chips list={PLATFORMS} title="Platforms" />
        </div>
      }
    />
  );
};

export default Skills;
