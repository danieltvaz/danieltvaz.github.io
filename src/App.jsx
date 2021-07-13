import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global/Global";
import Welcome from "./containers/Welcome";
import useTheme from "./hooks/useTheme";
import Header from "./containers/Header";
import ThemedButton from "./components/ThemeButton";
import Skills from "./containers/Skills";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <ThemedButton toggleTheme={toggleTheme} />
        <Welcome />
        <Skills />
      </ThemeProvider>
    </>
  );
}

export default App;
