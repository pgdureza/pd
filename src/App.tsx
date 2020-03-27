import React from "react";
import { Header, Footer, Section } from "src/components/Layout";
import { Skills, Hero, AboutMe, Projects } from "src/components/Sections";
import { ThemeProvider } from "styled-components";
import { Theme } from "src/lib";
import AOS from "aos";
import { Waypoint } from "react-waypoint";
import "aos/dist/aos.css";
import { IHeaderStyle } from "src/components/Layout/Header";

const App: React.FC = () => {
  React.useEffect(() => {
    AOS.init({ duration: 600, offset: 300 });
  }, []);

  const [headerStyle, setHeaderStyle] = React.useState<IHeaderStyle>("solid");

  const setHeaderTransparent = () => {
    setHeaderStyle("transparent");
  };

  const setHeaderSolid = () => {
    setHeaderStyle("solid");
  };

  return (
    <ThemeProvider theme={Theme}>
      <Header headerStyle={headerStyle} />
      <Waypoint onEnter={setHeaderTransparent} onLeave={setHeaderSolid}>
        <div id="hero">
          <Hero />
        </div>
      </Waypoint>
      <Section id="me">
        <AboutMe />
      </Section>
      <Section id="skills" title="Here's what I like to use">
        <Skills />
      </Section>
      <Section id="projects" title="Projects that I worked on">
        <Projects />
      </Section>
      <Footer id="contact" />
    </ThemeProvider>
  );
};

export default App;
