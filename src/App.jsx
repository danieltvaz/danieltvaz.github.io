import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global/Global";
import Welcome from "./containers/Welcome";
import useTheme from "./hooks/useTheme";
import Header from "./containers/Header";
import ThemedButton from "./components/ThemeButton";
import Skills from "./containers/Skills";
import Certificates from "./containers/Certificates";
import UnderConstruction from "./components/UnderConstruction";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <UnderConstruction />
        <Header />
        <ThemedButton toggleTheme={toggleTheme} />
        <Welcome />
        <Skills />
        <Certificates />
      </ThemeProvider>
    </>
  );
}

export default App;
