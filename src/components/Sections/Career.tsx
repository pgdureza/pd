import React from "react";
import Chips from "src/components/Chips";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Theme } from "src/lib";
import AppDataContext from "../AppDataContext";
import { pulse } from "react-animations";
import styled, { keyframes } from "styled-components";

import {
  faPlaneArrival,
  faPlaneDeparture,
  faUsers,
  faMoneyBillWave,
  faCreditCard,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const H3 = styled.h3`
  color: ${Theme.heroFont};
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
`;

const H5 = styled.h5`
  color: ${Theme.primary};
  font-family: ${Theme.fontFamily1};
  letter-spacing: -1px;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const Descriptions = styled.div`
  font-size: 0.75rem;
`;

const Icon = styled(FontAwesomeIcon)`
  width: 1.5rem !important;
  animation 1s ${keyframes`${pulse}`} infinite;
`;

const Root = styled(VerticalTimeline)`
  width: 100%;
  .vertical-timeline-element > div {
    border-radius: 1.5rem;
  }
`;

const Career: React.FC = () => {
  const data = React.useContext(AppDataContext);
  return (
    <Root>
      {data.career.map((career, index) => {
        const background = Theme.white;
        const iconBackground = index % 2 ? Theme.primary : Theme.secondary;
        const icons = [
          faCode,
          faMoneyBillWave,
          faCreditCard,
          faUsers,
          faPlaneArrival,
          faPlaneDeparture,
        ];
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background,
              borderTop: `0.1875rem solid ${iconBackground}`,
            }}
            contentArrowStyle={{
              borderRight: `0.5rem solid  ${background}`,
            }}
            date={career.date}
            icon={<Icon icon={icons[index]} />}
            iconStyle={{
              background: iconBackground,
              color: Theme.white,
            }}
          >
            <H3 className="vertical-timeline-element-title">
              {career.position}
            </H3>
            <H5 className="vertical-timeline-element-subtitle">
              {career.company}
            </H5>
            <Descriptions>
              <Chips list={career.descriptions} />
            </Descriptions>
          </VerticalTimelineElement>
        );
      })}
    </Root>
  );
};

export default Career;
