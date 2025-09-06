import Container from '@/components/Container/Container'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import { Check } from 'lucide-react'
import React, { FC } from 'react'
import { useTranslations } from 'next-intl'

const AboutSection: FC = () => {
  const t = useTranslations()
  const aboutBullets = [0, 1, 2, 3, 4]

  return (
    <section
      id="about"
      className="flex flex-row items-center relative overflow-hidden bg-gray-600 bg-opacity-40 h-[640px] md:h-[1024px]"
    >
      <Container className="px-1">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755427123/kxcvzzebkqers0gx3zh3.jpg)`,
          }}
        />

        <div className="relative z-10 w-full p-8 text-gray-300">
          <SectionTitle
            title={t('about.title')}
            subtitle={t('about.subtitle')}
          />

          <div className="md:px-24 mx-auto mt-8 grid max-w-4xl gap-2 bg-transparent">
            {aboutBullets.map(i => (
              <div key={i} className="flex items-center gap-2 text-base">
                <Check className="mt-1 h-4 w-4 flex-none" />
                <span className="">{t(`about.bullets.${i}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutSection
