import React from 'react'
import { useEffect, useState } from 'react'
import { getTheme } from '@/utils/localdb'

export type Theme = 'light' | 'dark'

const useDarkMode = (): [
  Theme,
  React.Dispatch<React.SetStateAction<Theme>>
] => {
  const usersTheme: Theme = getTheme() || 'dark'

  const [theme, setTheme] = useState<Theme>(usersTheme)

  const colorTheme: Theme = theme === 'light' ? 'dark' : 'light'

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(colorTheme)
    root.classList.add(theme)
  }, [theme, colorTheme])

  return [colorTheme, setTheme]
}

export default useDarkMode
