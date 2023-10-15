// LanguageProvider.js
import React, { useState } from 'react';
import LanguageContext from './LanguageContext';

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language is 'en' (English)

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
};

export default LanguageProvider;
