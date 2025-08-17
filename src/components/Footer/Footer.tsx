import Container from '@/components/Container/Container'
import React, { FC } from 'react'
import { useTranslations } from 'next-intl'

const Footer: FC = () => {
  const t = useTranslations()

  return (
    <footer className="border-t border-gray-300 py-10 bg-gray-100">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-sm text-gray-500">
          ©️ {new Date().getFullYear()} Jane Pokkinen. {t('footer.rights')}
        </div>
        <div className="flex items-center gap-6 text-sm text-gray-500">
          <a href="#pricing" className="hover:text-gray-900">
            {t('nav.pricing')}
          </a>
          <a href="#faq" className="hover:text-gray-900">
            {t('nav.faq')}
          </a>
          <a href="#contact" className="hover:text-gray-900">
            {t('nav.contact')}
          </a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
