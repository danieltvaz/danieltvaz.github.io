import { ThemeProvider } from "styled-components";

const colors = {
  light: {
    highlight: "#44bef1",
    text: "#212121",
    navLink: "#aeb5de",
    activeLink: "#fff9fa",
    foreground: "#3445b4",
    background: "#fafafa",
  },
  dark: {
    highlight: "#00aeed",
    text: "#ffffff",
    foreground: "#333333",
    background: "#3b3b3b",
  },
};

export default function Theme({ children }) {
  return <ThemeProvider theme={colors.light}>{children}</ThemeProvider>;
}
