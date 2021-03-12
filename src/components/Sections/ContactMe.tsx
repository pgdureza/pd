import React from "react";
import styled from "styled-components";
import {
  faLinkedin,
  faGithub,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import SocialIcon from "../SocialIcon";
import AppDataContext from "../AppDataContext";

const Root = styled.div``;

const ContactMe: React.FC = () => {
  const data = React.useContext(AppDataContext);
  return (
    <Root>
      <SocialIcon link={data.socials.linkedin} icon={faLinkedin} />
      <SocialIcon link={data.socials.facebook} icon={faFacebook} />
      <SocialIcon link={data.socials.github} icon={faGithub} />
      <SocialIcon link={`mailto:${data.socials.email}`} icon={faEnvelope} />
    </Root>
  );
};

export default ContactMe;
