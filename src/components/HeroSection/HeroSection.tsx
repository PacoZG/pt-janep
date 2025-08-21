import Container from '@/components/Container/Container'
import { motion } from 'framer-motion'
import { ShieldCheck, Star } from 'lucide-react'
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
    <section className="relative overflow-hidden bg-gray-900 bg-opacity-60">
      <Container className="grid gap-10 py-16 md:grid-cols-2 md:py-24">
        <Image
          className={'rounded-3xl '}
          src={
            'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1635678768/k82chnjvlsftuswvcuow.jpg'
          }
          alt="Jane Pokkinen Coach"
          height={1024}
          width={1024}
        />

        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-300">
              {t('hero.kicker')}
            </div>

            {/* Updated heading and paragraph colors for contrast */}
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-800 sm:text-5xl">
              {t('hero.title')}
            </h1>

            <Typewriter />

            {/*<p className="mt-4 text-lg text-gray-300">{t('hero.subtitle')}</p>*/}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => smoothScroll('contact')}
                className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-blue-600 px-8 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                {t('hero.ctaPrimary')}
              </button>

              <button
                onClick={() => smoothScroll('programs')}
                className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                {t('hero.ctaSecondary')}
              </button>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-500">
              <div className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-blue-900" />
                <span className="text-gray-300"> {t('hero.trust1')}</span>
              </div>

              <div className="inline-flex items-center gap-2">
                <Star className="h-4 w-4 text-blue-900" />{' '}
                <span className="text-gray-300"> {t('hero.trust2')}</span>
              </div>

              <div className="inline-flex items-center gap-2">
                <span className="text-gray-300"> {t('hero.trust3')}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/*<div className="relative">*/}
        {/*  <motion.div*/}
        {/*    initial={{ opacity: 0, scale: 0.95 }}*/}
        {/*    animate={{ opacity: 1, scale: 1 }}*/}
        {/*    transition={{ duration: 0.6 }}*/}
        {/*    className="rounded-3xl border border-gray-300 bg-white p-6 shadow-lg sm:p-8"*/}
        {/*  >*/}
        {/*    <div className="mb-4 flex items-center gap-3">*/}
        {/*      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">*/}
        {/*        <HeartPulse className="h-6 w-6 text-blue-600" />*/}
        {/*      </div>*/}
        {/*      <div>*/}
        {/*        <div className="text-sm font-semibold text-gray-800">*/}
        {/*          {t('hero.introCard.title')}*/}
        {/*        </div>*/}

        {/*        <div className="text-xs text-gray-500">*/}
        {/*          {t('hero.introCard.subtitle')}*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    <p className="text-sm text-gray-500">*/}
        {/*      {t('hero.introCard.description')}*/}
        {/*    </p>*/}

        {/*    <div className="mt-4 flex gap-3">*/}
        {/*      <a*/}
        {/*        href="#contact"*/}
        {/*        className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"*/}
        {/*      >*/}
        {/*        {t('hero.ctaPrimary')}*/}
        {/*      </a>*/}
        {/*      <a*/}
        {/*        href="#programs"*/}
        {/*        className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"*/}
        {/*      >*/}
        {/*        {t('hero.introCard.ctaSecondary')}*/}
        {/*      </a>*/}
        {/*    </div>*/}
        {/*  </motion.div>*/}
        {/*</div>*/}
      </Container>
    </section>
  )
}

export default HeroSection
