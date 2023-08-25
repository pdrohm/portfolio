import React from "react";
import { useTheme } from "../context/ThemeProvider";

import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  console.log("isDarkMode", isDarkMode);

  return (
    <div
      className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black dark:bg-white"
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <BsFillSunFill className="text-zinc-800" />
      ) : (
        <BsFillMoonFill className="text-zinc-200" />
      )}
    </div>
  );
};

export default ThemeToggle;
