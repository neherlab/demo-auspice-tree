import i18nOriginal from 'i18next'
import { initReactI18next } from 'react-i18next'

import enSidebar from 'auspice/src/locales/en/sidebar.json'
import enTranslation from 'auspice/src/locales/en/translation.json'

export const AUSPICE_I18N_NAMESPACES = ['language', 'sidebar', 'translation']

export function i18nInit({ localeKey }) {
  const i18n = i18nOriginal.use(initReactI18next).createInstance({
    resources: {
      en: { sidebar: enSidebar, translation: enTranslation },
    },
    lng: 'en',
    fallbackLng: 'en',
    debug: false,
    interpolation: { escapeValue: false },
    defaultNS: 'translation',
  })

  void i18n.init()

  return i18n
}

const i18n = i18nInit({ localeKey: 'en' })

export default i18n
