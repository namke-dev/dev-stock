import { FaMoon } from "react-icons/fa";
import React, { useContext } from "react";
import ThemeContext from "../context/theme-context";

export default function ThemeSwitch() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);

    if (!darkMode) {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <button
      className={`rounded-lg border-1 border-neutral-200 p-1.5
      absolute 
      right-1
      md:right-4 md:top-4
      shadow-md
      dark:bg-slate-500`}
      onClick={toggleDarkMode}
    >
      <FaMoon
        className={`h-4 w-4 md:h-6 md:w-6 cursor-pointer stroke-1 stroke-neutral-400 fill-gray-300
         dark:fill-yellow-400 dark:stroke-yellow-400`}
      />
    </button>
  );
}
