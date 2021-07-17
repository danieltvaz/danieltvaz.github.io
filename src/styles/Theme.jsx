import { ThemeProvider } from "styled-components";

const colors = {
  light: {
    highlight: "#00aeed",
    text: "#000000",
    foreground: "#ffffff",
    background: "beige",
  },
  dark: {
    highlight: "#00aeed",
    text: "#ffffff",
    foreground: "#000000",
    background: "#3b3b3b",
  },
};

export default function Theme({ children }) {
  return <ThemeProvider theme={colors.dark}>{children}</ThemeProvider>;
}
