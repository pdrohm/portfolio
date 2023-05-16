import React from "react";
import { useLanguage } from "../context/LanguageProvider";

const LanguageToggle: React.FC = () => {
  const { isEngActive, toggleLanguage } = useLanguage();

  return (
    <div className="flex items-center absolute top-5 left-1/2 cursor-pointer z-50">
      <div
        className={`relative rounded-full w-14 h-8 transition-colors duration-300 ${
          isEngActive ? "bg-[#dd3127]" : "bg-[#029639]"
        }`}
        onClick={toggleLanguage}
      >
        <div
          className={`absolute top-0 left-0 w-8 h-8 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
            isEngActive ? "translate-x-6" : "translate-x-0"
          }`}
        >
          <img
            src={isEngActive ? "rounded-usa.svg" : "rounded-br.svg"}
            alt={isEngActive ? "USA" : "BR"}
            className="w-10 h-10 m-1 rounded-full"
          />
        </div>
      </div>
      <div className="ml-2"></div>
    </div>
  );
};

export default LanguageToggle;
