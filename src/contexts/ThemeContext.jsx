import React, {createContext, useState, useEffect} from 'react'

const ThemeContext = createContext()

const ThemeProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkmode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)

    if (newMode) {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
    }
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
      setIsDarkMode(true)
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
      setIsDarkMode(false)
    }
  }, [])

  return (
    <ThemeContext.Provider value={{isDarkMode, toggleDarkmode}}>
        {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }