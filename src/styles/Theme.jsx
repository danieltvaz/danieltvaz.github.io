import { ThemeProvider } from "styled-components";

const colors = {
  light: {
    name: "light",
    highlight: "#44bef1",
    text: "#212121",
    invertText: "#fafafa",
    navLink: "#aeb5de",
    activeLink: "#fff9fa",
    foreground: "#3445b4",
    background: "#fafafa",
  },
  dark: {
    name: "dark",
    highlight: "#00aeed",
    text: "#fafafa",
    invertText: "#212121",
    navLink: "#aeb5de",
    activeLink: "#fff9fa",
    foreground: "#0d1140",
    background: "#3b3b3b",
  },
};

export default function Theme({ children, darkMode }) {
  return (
    <ThemeProvider theme={darkMode ? colors.dark : colors.light}>
      {children}
    </ThemeProvider>
  );
}
