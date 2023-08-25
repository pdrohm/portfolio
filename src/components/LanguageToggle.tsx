import React from "react";
import { useLanguage } from "../context/LanguageProvider";

const LanguageToggle: React.FC = () => {
  const { isEnglish, toggleLanguage } = useLanguage();

  return (
    <div className="flex cursor-pointer items-center">
      <div
        className={`relative h-8 w-14 rounded-full transition-colors duration-300 ${
          isEnglish ? "bg-[#dd3127]" : "bg-[#029639]"
        }`}
        onClick={toggleLanguage}
      >
        <div
          className={`absolute left-0 top-0 flex h-8 w-8 transform items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ${
            isEnglish ? "translate-x-6" : "translate-x-0"
          }`}
        >
          <img
            src={isEnglish ? "rounded-en.svg" : "rounded-br.svg"}
            alt={isEnglish ? "English option" : "Brazilian option"}
            className="m-1 h-10 w-10 rounded-full"
          />
        </div>
      </div>
      <div className="ml-2"></div>
    </div>
  );
};

export default LanguageToggle;
