import React, { useState, createContext, useContext } from 'react';

type LanguageContextType = {
  isEngActive: boolean;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

type LanguageProviderProps = {
  children: React.ReactNode;
};

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [isEngActive, setIsEngActive] = useState(true);

  const toggleLanguage = () => {
    setIsEngActive(!isEngActive);
  };

  const contextValue: LanguageContextType = {
    isEngActive,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
