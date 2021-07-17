import { Element } from "react-scroll";
import Theme from "./styles/Theme";
import SideBar from "./containers/SideBar";
import GlobalStyle from "./styles/global";
import styled from "styled-components";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Certificates from "./pages/Certificates";
import Projects from "./pages/Projects";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TestButton = styled.button`
  position: fixed;
`;

function App() {
  return (
    <>
      <Theme>
        <GlobalStyle />
        <TestButton>Testar</TestButton>
        <SideBar />
        <AppWrapper>
          <Element name="about">
            <About />
          </Element>
          <Element id="skills">
            <Skills />
          </Element>
          <Element id="certificates">
            <Certificates />
          </Element>
          <Element id="projects">
            <Projects />
          </Element>
        </AppWrapper>
      </Theme>
    </>
  );
}

export default App;
