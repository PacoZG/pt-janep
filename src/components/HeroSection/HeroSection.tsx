import Container from '@/components/Container/Container'
import { motion } from 'framer-motion'
import { Coffee, HeartPulse, ShieldCheck, Star } from 'lucide-react'
import React from 'react'
import { useTranslations } from 'next-intl'

const HeroSection = () => {
  const t = useTranslations()
  const smoothScroll = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative overflow-hidden bg-gray-200">
      <Container className="grid gap-10 py-16 md:grid-cols-2 md:py-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
              {t('hero.kicker')}
            </div>

            {/* Updated heading and paragraph colors for contrast */}
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              {t('hero.title')}
            </h1>

            <p className="mt-4 text-lg text-gray-700">{t('hero.subtitle')}</p>

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
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-blue-600" />{' '}
                {t('hero.trust1')}
              </span>

              <span className="inline-flex items-center gap-2">
                <Star className="h-4 w-4 text-blue-600" /> {t('hero.trust2')}
              </span>

              <span className="inline-flex items-center gap-2">
                <Coffee className="h-4 w-4 text-blue-600" /> {t('hero.trust3')}
              </span>
            </div>
          </motion.div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-gray-300 bg-white p-6 shadow-lg sm:p-8"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
                <HeartPulse className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-800">
                  {t('hero.introCard.title')}
                </div>

                <div className="text-xs text-gray-500">
                  {t('hero.introCard.subtitle')}
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              {t('hero.introCard.description')}
            </p>

            <div className="mt-4 flex gap-3">
              <a
                href="#contact"
                className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                {t('hero.ctaPrimary')}
              </a>
              <a
                href="#programs"
                className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                {t('hero.introCard.ctaSecondary')}
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
