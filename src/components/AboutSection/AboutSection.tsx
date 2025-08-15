import Container from '@/components/Container/Container'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import { Check } from 'lucide-react'
import React from 'react'
import { useTranslations } from 'next-intl'

const AboutSection = () => {
  const t = useTranslations()
  const aboutBullets = [0, 1, 2, 3, 4]

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-100">
      <Container>
        <SectionTitle title={t('about.title')} subtitle={t('about.subtitle')} />
        <div className="mx-auto mt-8 grid max-w-4xl gap-3">
          {/* Iterate through the bullet keys and get the translated string for each */}
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
