import React, { createContext, useEffect, useState, ReactNode } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { darkTheme } from '../styles/themes/dark'
import { lightTheme } from '../styles/themes/light'

type Theme = 'dark' | 'light'

type ThemeContextType = {
  theme: Theme
  setLightTheme: () => void
  setDarkTheme: () => void
  isOpen: boolean
  toggleSidebar: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  setLightTheme: () => {},
  setDarkTheme: () => {},
  isOpen: false,
  toggleSidebar: () => {},
})

type ThemeProviderProps = {
  children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark')

  const setLightTheme = () => {
    const newTheme = 'light'
    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  const setDarkTheme = () => {
    const newTheme = 'dark'
    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark'
    if (storedTheme) {
      setTheme(storedTheme)
    }
  }, [])

  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <ThemeContext.Provider
      value={{ isOpen, theme, setLightTheme, setDarkTheme, toggleSidebar }}
    >
      <StyledThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}
