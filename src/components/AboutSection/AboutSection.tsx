import Container from '@/components/Container/Container'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import { Check } from 'lucide-react'
import React, { FC } from 'react'
import { useTranslations } from 'next-intl'

const AboutSection: FC = () => {
  const t = useTranslations()
  const aboutBullets = [0, 1, 2, 3, 4]

  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-10 opacity-25 blur-lg animate-gradient bg-gradient-to-tr from-indigo-800 via-cyan-700 to-gray-800" />

      <Container>
        <SectionTitle title={t('about.title')} subtitle={t('about.subtitle')} />
        <div className="mx-auto mt-8 grid max-w-4xl gap-3 bg-transparent">
          {aboutBullets.map(i => (
            <div key={i} className="flex items-start gap-3 text-base">
              <Check className="mt-1 h-4 w-4 flex-none text-blue-600" />
              <span className="text-gray-700">{t(`about.bullets.${i}`)}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default AboutSection
