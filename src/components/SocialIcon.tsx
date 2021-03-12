import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { Theme } from "src/lib";
import styled from "styled-components";

const Link = styled.a`
  svg {
    transition: color 0.25s, transform 0.25s;
    color: ${Theme.white};
  }

  &:hover,
  &:focus,
  &:active {
    svg {
      color: ${Theme.secondary};
      transform: scale(1.1);
    }
  }
  display: inline-flex;
  padding: 1rem;
`;

interface IProps {
  icon: IconDefinition;
  link: string;
}

const SocialIcon: React.FC<IProps> = ({ icon, link }) => {
  return (
    <Link target="_blank" rel="noopener noreferrer" href={link}>
      <FontAwesomeIcon icon={icon} size="3x" />
    </Link>
  );
};

export default SocialIcon;
