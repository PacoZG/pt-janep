'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from '@/i18n/navigation'
import { getLanguage, setLanguage } from '@/utils/localdb'

type Language = 'en' | 'fi'

interface LanguageModelReturn {
  usersLanguage: string
  handleUsersLanguage: () => void
}

export const LanguageModel = (): LanguageModelReturn => {
  const router = useRouter()
  const pathname = usePathname() // Get the current path *without* the locale prefix

  const [usersLanguage, setUsersLanguage] = useState<string>('en')

  useEffect(() => {
    const storedLanguage = getLanguage() // From localStorage
    let effectiveLanguage: string

    if (storedLanguage) {
      effectiveLanguage = storedLanguage
    } else {
      const defaultBrowserLanguage: string =
        navigator.language || navigator.languages?.[0] || 'en-US'
      const languageCode = defaultBrowserLanguage.split('-')[0]
      const validLanguage: Language = languageCode === 'fi' ? 'fi' : 'en'
      effectiveLanguage = validLanguage

      setLanguage(effectiveLanguage)
    }

    router.push(pathname, { locale: effectiveLanguage })
    setUsersLanguage(effectiveLanguage)
  }, [pathname, router]) // Empty dependency array: runs only once on mount

  const handleUsersLanguage = () => {
    const newLanguage: Language = usersLanguage === 'en' ? 'fi' : 'en'
    setLanguage(newLanguage) // Update local storage
    setUsersLanguage(newLanguage) // Update local state

    router.push(pathname, { locale: newLanguage })
  }

  return { usersLanguage, handleUsersLanguage }
}
