import React from "react";
import { useTheme } from "../context/ThemeProvider";

import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div
      className="flex items-center justify-center absolute top-5 right-4 cursor-pointer z-50 rounded-full bg-black dark:bg-white w-6 h-6"
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <BsFillMoonFill className="text-zinc-200 bg-backgroundDark w-full rounded-full" />
      ) : (
        <BsFillSunFill className="text-zinc-800 bg-backgroundLight w-full rounded-full" />
      )}
    </div>
  );
};

export default ThemeToggle;
