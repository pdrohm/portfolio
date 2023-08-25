import React, { useState, createContext, useContext, useEffect } from "react";

type LanguageContextType = {
  isEnglish: boolean;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

type LanguageProviderProps = {
  children: React.ReactNode;
};

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const storedLanguage =
    typeof window !== "undefined" ? localStorage.getItem("language") : null;
  const initialLanguage = storedLanguage === "en";

  const [isEnglish, setIsEnglish] = useState(initialLanguage);

  const [language, setLanguage] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("language") || "en";
    }
    return "en";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("br", "en");
    root.classList.add(language);
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
    setLanguage(isEnglish ? "br" : "en");
  };

  const contextValue: LanguageContextType = {
    isEnglish,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
