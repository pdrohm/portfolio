import React from "react";
import { useLanguage } from "../context/LanguageProvider";

const LanguageToggle: React.FC = () => {
  const { isEnglish, toggleLanguage } = useLanguage();

  return (
    <div className="flex items-center cursor-pointer">
      <div
        className={`relative rounded-full w-14 h-8 transition-colors duration-300 ${
          isEnglish ? "bg-[#dd3127]" : "bg-[#029639]"
        }`}
        onClick={toggleLanguage}
      >
        <div
          className={`absolute top-0 left-0 w-8 h-8 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
            isEnglish ? "translate-x-6" : "translate-x-0"
          }`}
        >
          <img
            src={isEnglish ? "rounded-en.svg" : "rounded-br.svg"}
            alt={isEnglish ? "English option" : "Brazilian option"}
            className="w-10 h-10 m-1 rounded-full"
          />
        </div>
      </div>
      <div className="ml-2"></div>
    </div>
  );
};

export default LanguageToggle;
