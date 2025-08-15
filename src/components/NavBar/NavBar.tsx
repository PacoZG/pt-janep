import Container from '@/components/Container/Container'
import { Dumbbell } from 'lucide-react'
import React from 'react'
import { useTranslations } from 'next-intl'
import { LanguageModel } from '@/utils/language/LanguageModel'

const NavBar = () => {
  const t = useTranslations()
  const useLanguageModel = LanguageModel()
  const smoothScroll = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const navLinks = [
    'about',
    'services',
    'programs',
    'gallery',
    'pricing',
    'faq',
    'contact',
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-300 bg-white/80 backdrop-blur">
      <Container className="flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-100">
            <Dumbbell className="h-5 w-5 text-blue-600" />
          </div>

          <div>
            <div className="text-sm font-semibold leading-none text-gray-800">
              Jane Pokkinen Coaching
            </div>

            <div className="text-xs text-gray-500">
              PT · Health Coach · Groups
            </div>
          </div>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map(key => (
            <button
              key={key}
              onClick={() => smoothScroll(key)}
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              {t(`nav.${key}`)}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span
            className="inline-flex cursor-pointer items-center rounded-full border border-transparent bg-gray-200 px-2.5 py-0.5 text-xs font-semibold text-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-gray-300"
            onClick={useLanguageModel.handleUsersLanguage}
          >
            {useLanguageModel.usersLanguage === 'fi'
              ? 'Suomi / EN'
              : 'EN / Suomi'}
          </span>
        </div>
      </Container>
    </header>
  )
}

export default NavBar
