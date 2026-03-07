import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext(null)

export const COLOR_THEMES = [
  { id: 'blue',   name: 'Azul',    color: '#3b82f6' },
  { id: 'green',  name: 'Verde',   color: '#10b981' },
  { id: 'purple', name: 'Roxo',    color: '#8b5cf6' },
  { id: 'orange', name: 'Laranja', color: '#f97316' },
  { id: 'pink',   name: 'Rosa',    color: '#ec4899' },
]

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')
  const [colorTheme, setColorThemeState] = useState(() => localStorage.getItem('color_theme') || 'blue')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    document.documentElement.setAttribute('data-color', colorTheme)
    localStorage.setItem('color_theme', colorTheme)
  }, [colorTheme])

  function toggleTheme() {
    setDark((v) => !v)
  }

  function setColorTheme(id) {
    setColorThemeState(id)
  }

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme, colorTheme, setColorTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
