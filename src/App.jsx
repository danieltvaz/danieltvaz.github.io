import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global/Global";
import About from "./containers/About";
import useTheme from "./hooks/useTheme";
import Header from "./containers/Header";
import ThemedButton from "./components/ThemeButton";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <ThemedButton toggleTheme={toggleTheme} />
        <About />
      </ThemeProvider>
    </>
  );
}

export default App;
