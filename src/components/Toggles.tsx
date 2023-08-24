import React from "react";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

function Toggles() {
  return (
    <div className="flex w-28 justify-between items-end absolute z-50 top-10 right-2 xl:right-20 lg:right-2 md:right-2">
      <LanguageToggle />
      <ThemeToggle />
    </div>
  );
}

export default Toggles;
