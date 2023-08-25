import React from "react";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

function Toggles() {
  return (
    <div className="absolute right-2 top-10 z-50 flex w-28 items-end justify-between md:right-2 lg:right-2 xl:right-20">
      <LanguageToggle />
      <ThemeToggle />
    </div>
  );
}

export default Toggles;
