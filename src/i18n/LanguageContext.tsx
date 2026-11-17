import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import {
  DEFAULT_LANGUAGE,
  LanguageOption,
  SUPPORTED_LANGUAGES,
  SupportedLanguageCode,
} from '../types/language';
import { TranslationDictionary } from '../types/i18n';
import { TRANSLATIONS } from './translations';

const STORAGE_KEY = 'agrimitra_preferred_language';

interface LanguageContextValue {
  language: SupportedLanguageCode;
  languageMeta: LanguageOption;
  setLanguage: (code: SupportedLanguageCode) => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function getInitialLanguage(): SupportedLanguageCode {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY) as SupportedLanguageCode | null;
    if (saved && SUPPORTED_LANGUAGES.some((item) => item.code === saved)) {
      return saved;
    }
  } catch {
    // Ignore storage access failures in restricted environments
  }
  return DEFAULT_LANGUAGE;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<SupportedLanguageCode>(getInitialLanguage);

  const setLanguage = (code: SupportedLanguageCode) => {
    setLanguageState(code);
    try {
      window.localStorage.setItem(STORAGE_KEY, code);
    } catch {
      // Ignore storage access failures
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => {
    const languageMeta =
      SUPPORTED_LANGUAGES.find((item) => item.code === language) ?? SUPPORTED_LANGUAGES[0];
    return {
      language,
      languageMeta,
      setLanguage,
      t: TRANSLATIONS[language],
    };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
