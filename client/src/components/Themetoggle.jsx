import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="
        w-11
        h-11
        flex
        items-center
        justify-center
        rounded-xl
        border
        border-slate-300
        dark:border-slate-700
        bg-white
        dark:bg-slate-900
        text-slate-700
        dark:text-yellow-400
        shadow-sm
        hover:shadow-lg
        hover:scale-105
        transition-all
        duration-300
      "
    >
      {darkMode ? (
        <FaSun className="text-lg" />
      ) : (
        <FaMoon className="text-lg" />
      )}
    </button>
  );
}

export default ThemeToggle;