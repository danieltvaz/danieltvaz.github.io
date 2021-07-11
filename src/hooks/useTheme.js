import { useState } from "react";

const themes = {
  light: {
    name: "light",
    textColor: "#171617",
    activeColor: "#02b0d9",
    highlight: "#8257e5",
    foreground: "rgb(220,220,220)",
    background: "#ffffff",
  },
  dark: {
    name: "dark",
    textColor: "#ebebeb",
    activeColor: "#02b0d9",
    highlight: "#8257e5",
    foreground: "rgb(3,6,7, 0.9)",
    background: "#000000",
  },
};

export default function useTheme() {
  const [theme, setTheme] = useState(themes.dark);

  function toggleTheme() {
    theme.name === "dark"
      ? setTheme((state) => (state = themes.light))
      : setTheme((state) => (state = themes.dark));
  }

  return { theme, toggleTheme };
}
