import { useContext, createContext, useState, useEffect } from 'react'

const AppContext = createContext()

// for setting up the dark mode through js
const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches
  const storedDarkMode = localStorage.getItem('darkTheme')
  if (storedDarkMode == null) return prefersDarkMode
  return storedDarkMode === 'true'
}

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode())
  const [searchTerm, setSearchTerm] = useState('dog')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  console.log(currentPage)
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)
    localStorage.setItem('darkTheme', newDarkTheme)
  }

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme)
  }, [isDarkTheme])

  return (
    <AppContext.Provider
      value={{
        isDarkTheme,
        toggleDarkTheme,
        searchTerm,
        setSearchTerm,
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => useContext(AppContext)

//lesson : context will rerender all the children subsrcibed to it when any of the state changes inside
// it regardless whether you pass that state as value or not. The default behaviour we already know is rerendering
// the subscribers when value changes
