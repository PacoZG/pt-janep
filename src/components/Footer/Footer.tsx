import Container from '@/components/Container/Container'
import React, { FC } from 'react'
import { useTranslations } from 'next-intl'

const Footer: FC = () => {
  const t = useTranslations()

  return (
    <footer className="border-t border-gray-700 py-10 bg-gray-900 bg-opacity-75">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-sm text-gray-400">
          ©️ {new Date().getFullYear()} Jane Pokkinen. {t('footer.rights')}
        </div>
        <div className="flex items-center gap-6 text-sm text-gray-400">
          <a href="#pricing" className="hover:text-white">
            {t('nav.pricing')}
          </a>
          <a href="#faq" className="hover:text-white">
            {t('nav.faq')}
          </a>
          <a href="#contact" className="hover:text-white">
            {t('nav.contact')}
          </a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
