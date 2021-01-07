import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { SnackbarProvider } from 'notistack';

import { LanguageProvider } from './useLanguage';

import i18n from '../i18n';

const AppProvider: React.FC = ({ children }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          {children}
        </SnackbarProvider>
      </LanguageProvider>
    </I18nextProvider>
  );
};

export default AppProvider;
