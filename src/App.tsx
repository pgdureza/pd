import React from "react";
import { Header, Footer, Section } from "src/components/Layout";
import { Skills, Hero, AboutMe } from "src/components/Sections";
import { ThemeProvider } from "styled-components";
import { Theme } from "src/lib";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <Hero />
      <Section>
        <AboutMe />
      </Section>
      <Section>
        <Skills />
      </Section>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
