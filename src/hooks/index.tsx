import React from 'react';

import { LanguageProvider } from './useLanguage';

const AppProvider: React.FC = ({ children }) => {
  return <LanguageProvider>{children}</LanguageProvider>;
};

export default AppProvider;
