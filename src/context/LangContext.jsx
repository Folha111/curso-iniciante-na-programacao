import { createContext, useContext, useState, useCallback } from 'react'
import translations from '../data/translations'

const LangContext = createContext(null)

function getLangFromStorage() {
  try {
    const settings = JSON.parse(localStorage.getItem('app_settings') || '{}')
    return settings.language || 'pt'
  } catch {
    return 'pt'
  }
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(getLangFromStorage)

  const setLang = useCallback((newLang) => {
    setLangState(newLang)
    try {
      const settings = JSON.parse(localStorage.getItem('app_settings') || '{}')
      settings.language = newLang
      localStorage.setItem('app_settings', JSON.stringify(settings))
    } catch {}
  }, [])

  const t = useCallback(
    (section, key) => translations[lang]?.[section]?.[key] ?? translations['pt']?.[section]?.[key] ?? key,
    [lang]
  )

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
