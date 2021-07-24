import useDarkMode from "./hooks/useDarkMode";
import { Element } from "react-scroll";
import Footer from "./containers/Footer";
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
  overflow-x: hidden;
`;

function App() {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <>
      <Theme darkMode={darkMode}>
        <GlobalStyle />
        <AppWrapper>
          <SideBar setDarkMode={setDarkMode} darkMode={darkMode} />
          <div>
            <Element name="about">
              <About />
            </Element>
            <Element id="projects">
              <Projects />
            </Element>
            <Element id="skills">
              <Skills />
            </Element>
            <Element id="certificates">
              <Certificates />
            </Element>
            <Footer />
          </div>
        </AppWrapper>
      </Theme>
    </>
  );
}

export default App;
