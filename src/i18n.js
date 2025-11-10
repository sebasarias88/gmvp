import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Import translations
import esTranslations from './locales/es/translation.json'
import enTranslations from './locales/en/translation.json'

// Function to detect language based on geolocation
const detectLanguageByLocation = () => {
  // Check if we have a stored language preference
  const storedLang = localStorage.getItem('i18nextLng')
  if (storedLang) {
    return storedLang
  }

  // Try to detect from browser language
  const browserLang = navigator.language || navigator.userLanguage
  const langCode = browserLang.split('-')[0].toLowerCase()

  // If browser language is English, default to English
  if (langCode === 'en') {
    return 'en'
  }

  // Default to Spanish for Latin America and other regions
  return 'es'
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: esTranslations
      },
      en: {
        translation: enTranslations
      }
    },
    lng: detectLanguageByLocation(),
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  })

export default i18n

