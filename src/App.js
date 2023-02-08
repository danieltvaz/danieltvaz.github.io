import About from "./pages/About";
import Certificates from "./pages/Certificates";
import { Element } from "react-scroll";
import Experience from "./pages/Experience";
import Footer from "./containers/Footer";
import GlobalStyle from "./styles/global";
import MainContentWrapper from "./components/MainContentWrapper";
import Projects from "./pages/Projects";
import SideBar from "./containers/SideBar";
import Skills from "./pages/Skills";
import Theme from "./styles/Theme";
import styled from "styled-components";
import useDarkMode from "./hooks/useDarkMode";

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
          <MainContentWrapper>
            <Element name="about">
              <About />
            </Element>
            {/* <Element id="projects">
              <Projects />
            </Element> */}
            <Element id="skills">
              <Skills />
            </Element>
            <Element id="experience">
              <Experience />
            </Element>
            <Element id="certificates">
              <Certificates />
            </Element>
            <Footer />
          </MainContentWrapper>
        </AppWrapper>
      </Theme>
    </>
  );
}

export default App;
