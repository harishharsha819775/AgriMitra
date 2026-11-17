export type SupportedLanguageCode = 'en' | 'kn' | 'hi' | 'ta' | 'te';

export interface LanguageOption {
  code: SupportedLanguageCode;
  name: string;
  nativeName: string;
  speechLocale: string;
  priority: 'primary' | 'secondary';
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    speechLocale: 'en-IN',
    priority: 'primary',
  },
  {
    code: 'kn',
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ',
    speechLocale: 'kn-IN',
    priority: 'primary',
  },
  {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    speechLocale: 'hi-IN',
    priority: 'secondary',
  },
  {
    code: 'ta',
    name: 'Tamil',
    nativeName: 'தமிழ்',
    speechLocale: 'ta-IN',
    priority: 'secondary',
  },
  {
    code: 'te',
    name: 'Telugu',
    nativeName: 'తెలుగు',
    speechLocale: 'te-IN',
    priority: 'secondary',
  },
];

export const DEFAULT_LANGUAGE: SupportedLanguageCode = 'en';
