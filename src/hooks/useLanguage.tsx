import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import i18n from 'i18next';
import { Cookies } from 'react-cookie-consent';

interface LanguageContextProps {
  changeLanguage(lgn: string): void;
  language: string;
}

const LanguageContext = createContext<LanguageContextProps>({} as LanguageContextProps);

const LanguageProvider: React.FC = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const changeLanguage = useCallback((lgn: string) => {
    if (process.env.NODE_ENV !== 'test') i18n.changeLanguage(lgn.toLowerCase());
    Cookies.set('@square-landing-page:language', lgn);
    setLanguage(lgn);
  }, []);

  useEffect(() => {
    const lgnstrg = Cookies.get('@square-landing-page:language') || 'en';
    changeLanguage(lgnstrg);
  }, [changeLanguage]);

  return <LanguageContext.Provider value={{ language, changeLanguage }}>{children}</LanguageContext.Provider>;
};

const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within an LanguageProvider');
  }

  return context;
};

export { LanguageProvider, useLanguage };
