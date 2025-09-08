/* istanbul ignore file */
import { Theme } from '@/hooks/useDarkMode'

const setTheme = (theme: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('usersTheme', JSON.stringify(theme))
  }
}

const getTheme: () => Theme | null = () => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('usersTheme')

    return (stored && JSON.parse(stored)) || null
  }

  return null
}

const setLanguage = (lang: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('usersLanguage', JSON.stringify(lang))
  }
}

const getLanguage: () => string | null = () => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('usersLanguage')

    return (stored && JSON.parse(stored)) || null
  }

  return null
}

export { setTheme, getTheme, setLanguage, getLanguage }
