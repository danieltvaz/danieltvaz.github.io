import { useState } from "react";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  return { darkMode, setDarkMode };
}
