import Container from '@/components/Container/Container'
import { Coffee, ShieldCheck, Star } from 'lucide-react'
import Image from 'next/image'
import React, { FC } from 'react'
import { useTranslations } from 'next-intl'
import Typewriter from '@/components/HeroSection/Typewriter'

const HeroSection: FC = () => {
  const t = useTranslations()
  const smoothScroll = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="flex flex-row items-center justify-evenly relative overflow-hidden bg-gray-600 bg-opacity-40 md:h-[1024px]">
      <Container className="grid gap-4 py-16 md:grid-cols-2 md:py-24">
        <Image
          className={'rounded-3xl '}
          src={
            'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1757149061/aoblkoqqnpqrnv48jl1n.jpg'
          }
          alt="Jane Pokkinen Coach"
          height={1024}
          width={1024}
        />

        <div className="flex flex-col gap-2 md:justify-between md:py-2">
          <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-300">
            {t('hero.kicker')}
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-200 sm:text-5xl">
            {t('hero.title')}
          </h1>

          <Typewriter />

          <button
            onClick={() => smoothScroll('contact')}
            className="transition duration-500 ease-in-out inline-flex h-12 w-full items-center justify-center whitespace-nowrap rounded-md bg-red-800 px-8 py-2 text-sm font-medium text-gray-300 shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            {t('hero.ctaPrimary')}
          </button>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <div className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-red-600" />
              <span className="text-gray-200"> {t('hero.trust1')}</span>
            </div>

            <div className="inline-flex items-center gap-2">
              <Star className="h-4 w-4 text-red-600" />{' '}
              <span className="text-gray-200"> {t('hero.trust2')}</span>
            </div>

            <div className="inline-flex items-center gap-2">
              <Coffee className="h-4 w-4 text-red-600" />
              <span className="text-gray-200"> {t('hero.trust3')}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
