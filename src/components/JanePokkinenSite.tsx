'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Check,
  Dumbbell,
  HeartPulse,
  Salad,
  Users,
  Sparkles,
  Mail,
  Phone,
  Clock,
  MapPin,
  Star,
  ShieldCheck,
  Coffee,
  BookOpen,
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import Container from '@/components/Container/Container'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import { LanguageModel } from '@/utils/language/LanguageModel'

// A map for dynamic icon rendering in the Services section
const iconMap = {
  Dumbbell: Dumbbell,
  Users: Users,
  HeartPulse: HeartPulse,
  Salad: Salad,
  Sparkles: Sparkles,
  BookOpen: BookOpen,
}

// --- Main Component ---
const JanePokkinenSite = () => {
  const t = useTranslations()
  const useLanguageModel = LanguageModel()

  const smoothScroll = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // --- Static data structures to correctly iterate over translation keys ---
  // The nav links
  const navLinks = [
    'about',
    'services',
    'programs',
    'pricing',
    'faq',
    'contact',
  ]

  // The 'About' section bullets (assuming 5 bullets based on the translations file)
  const aboutBullets = [0, 1, 2, 3, 4]

  // The 'Services' section items (assuming 6 items)
  const servicesItems = [0, 1, 2, 3, 4, 5]

  // The 'Programs' section items and their points (assuming 4 items, 3 points each)
  const programsItems = [0, 1, 2, 3]
  const programPoints = [0, 1, 2]

  // The 'Pricing' section tiers and their features (assuming 3 tiers)
  const pricingTiers = [0, 1, 2]
  const pricingFeatures = [0, 1, 2]

  // The 'FAQ' section questions (assuming 4 questions)
  const faqQuestions = [0, 1, 2, 3]

  return (
    <div className="relative min-h-screen scroll-smooth bg-background text-foreground">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
        <Container className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10">
              <Dumbbell className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold leading-none">
                Jane Pokkinen Coaching
              </div>
              <div className="text-xs text-muted-foreground">
                PT · Health Coach · Groups
              </div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map(key => (
              <button
                key={key}
                onClick={() => smoothScroll(key)}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {t(`nav.${key}`)}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <span
              className="inline-flex cursor-pointer items-center rounded-full border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-secondary/80"
              onClick={useLanguageModel.handleUsersLanguage}
            >
              {useLanguageModel.usersLanguage === 'fi'
                ? 'Suomi / EN'
                : 'EN / Suomi'}
            </span>
            <button
              onClick={() => smoothScroll('contact')}
              className="hidden md:inline-flex h-9 px-4 py-2 bg-primary text-primary-foreground shadow hover:bg-primary/90 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              {t('hero.ctaPrimary')}
            </button>
          </div>
        </Container>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <Container className="grid gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                {t('hero.kicker')}
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                {t('hero.title')}
              </h1>

              <p className="mt-4 text-lg text-muted-foreground">
                {t('hero.subtitle')}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => smoothScroll('contact')}
                  className="h-10 rounded-md px-8 bg-primary text-primary-foreground shadow hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  {t('hero.ctaPrimary')}
                </button>

                <button
                  onClick={() => smoothScroll('programs')}
                  className="h-10 rounded-md px-8 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  {t('hero.ctaSecondary')}
                </button>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" /> {t('hero.trust1')}
                </span>

                <span className="inline-flex items-center gap-2">
                  <Star className="h-4 w-4" /> {t('hero.trust2')}
                </span>

                <span className="inline-flex items-center gap-2">
                  <Coffee className="h-4 w-4" /> {t('hero.trust3')}
                </span>
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border bg-card p-6 shadow-lg sm:p-8"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <HeartPulse className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Free Intro Call</div>

                  <div className="text-xs text-muted-foreground">
                    15 minutes · online
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Not sure where to start? Book a quick chat. We’ll map your
                goals, constraints, and an easy first step.
              </p>

              <div className="mt-4 flex gap-3">
                <a
                  href="#contact"
                  className="h-9 px-4 py-2 bg-primary text-primary-foreground shadow hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Book now
                </a>
                <a
                  href="#programs"
                  className="h-9 px-4 py-2 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  See programs
                </a>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
        <Container>
          <SectionTitle
            title={t('about.title')}
            subtitle={t('about.subtitle')}
          />
          <div className="mx-auto mt-8 grid max-w-4xl gap-3">
            {/* Iterate through the bullet keys and get the translated string for each */}
            {aboutBullets.map(i => (
              <div key={i} className="flex items-start gap-3 text-base">
                <Check className="mt-1 h-4 w-4 flex-none" />
                <span>{t(`about.bullets.${i}`)}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-muted/30 py-16 md:py-24">
        <Container>
          <SectionTitle
            title={t('services.title')}
            subtitle={t('services.subtitle')}
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Iterate through a static list of indices to get the translated items */}
            {servicesItems.map(i => {
              const iconKey = t(`services.items.${i}.icon`)
              /* @ts-expect-error: Unreachable code error */
              const IconComponent = iconMap[iconKey] || Dumbbell

              return (
                <div
                  key={i}
                  className="rounded-2xl border bg-card text-card-foreground shadow-sm"
                >
                  <div className="flex flex-col space-y-1.5 p-6">
                    <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl font-semibold leading-none tracking-tight text-xl">
                      {t(`services.items.${i}.title`)}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t(`services.items.${i}.desc`)}
                    </p>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" /> 60–75 min
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 md:py-24">
        <Container>
          <SectionTitle
            title={t('programs.title')}
            subtitle={t('programs.subtitle')}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Iterate through a static list of indices to get the translated program items */}
            {programsItems.map(i => (
              <div
                key={i}
                className="rounded-2xl border bg-card text-card-foreground shadow-sm"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">
                    {t(`programs.items.${i}.title`)}
                  </h3>
                </div>
                <div className="p-6 pt-0">
                  <ul className="grid gap-2 text-sm text-muted-foreground">
                    {/* Nested loop for the points of each program */}
                    {programPoints.map(j => (
                      <li key={j} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4" />{' '}
                        {t(`programs.items.${i}.points.${j}`)}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex gap-3">
                    <a
                      href="#contact"
                      className="h-9 px-4 py-2 bg-primary text-primary-foreground shadow hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      {useLanguageModel.usersLanguage === 'fi'
                        ? 'Kysy lisää'
                        : 'Ask more'}
                    </a>
                    <a
                      href="#pricing"
                      className="h-9 px-4 py-2 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      {useLanguageModel.usersLanguage === 'fi'
                        ? 'Hinnat'
                        : 'Pricing'}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-muted/30 py-16 md:py-24">
        <Container>
          <SectionTitle
            title={t('pricing.title')}
            subtitle={t('pricing.subtitle')}
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {/* Iterate through a static list of indices to get the translated tiers */}
            {pricingTiers.map(i => {
              const tierName = t(`pricing.tiers.${i}.name`)
              const featured = i === 1 // 'Coach Me' is the second item (index 1)

              return (
                <div
                  key={i}
                  className={`rounded-2xl border bg-card text-card-foreground shadow-sm ${
                    featured ? 'border-primary shadow-xl' : ''
                  }`}
                >
                  <div className="flex flex-col space-y-1.5 p-6">
                    <span
                      className={`inline-flex w-fit items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${featured ? 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80' : 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}
                    >
                      {tierName}
                    </span>
                    <div className="mt-2 text-4xl font-bold">
                      {t(`pricing.tiers.${i}.price`)}{' '}
                      <span className="text-base font-normal text-muted-foreground">
                        {t(`pricing.tiers.${i}.period`)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <ul className="grid gap-2 text-sm text-muted-foreground">
                      {/* Nested loop for the features of each tier */}
                      {pricingFeatures.map(j => (
                        <li key={j} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4" />{' '}
                          {t(`pricing.tiers.${i}.features.${j}`)}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      className="mt-4 w-full h-9 px-4 py-2 bg-primary text-primary-foreground shadow hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      {useLanguageModel.usersLanguage === 'fi'
                        ? 'Aloita'
                        : 'Get started'}
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            {t('pricing.note')}
          </p>
        </Container>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24">
        <Container>
          <SectionTitle title={t('faq.title')} />
          <div className="mx-auto mt-10 grid max-w-3xl gap-6">
            {/* Iterate through a static list of indices to get the translated questions */}
            {faqQuestions.map(i => (
              <div
                key={i}
                className="rounded-2xl border bg-card text-card-foreground shadow-sm"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight text-lg">
                    {t(`faq.qas.${i}.q`)}
                  </h3>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-muted-foreground">{t(`faq.qas.${i}.a`)}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-muted/30 py-16 md:py-24">
        <Container>
          <SectionTitle
            title={t('contact.title')}
            subtitle={t('contact.subtitle')}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-5">
            <div className="order-2 rounded-2xl border bg-card text-card-foreground shadow-sm md:order-1 md:col-span-3">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  {t('contact.title')}
                </h3>
              </div>
              <div className="p-6 pt-0">
                <form
                  className="grid gap-4"
                  action={`mailto:jane.pokkinen@gmail.com`}
                  method="post"
                  encType="text/plain"
                >
                  <div className="grid gap-2">
                    <label className="text-sm font-medium" htmlFor="name">
                      {t('contact.name')}
                    </label>
                    <input
                      id="name"
                      name="name"
                      placeholder={t('contact.namePlaceholder')}
                      required
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium" htmlFor="email">
                      {t('contact.email')}
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium" htmlFor="phone">
                      {t('contact.phone')}
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      placeholder="+358 …"
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium" htmlFor="message">
                      {t('contact.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder={t('contact.messagePlaceholder')}
                      rows={5}
                      className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full h-9 px-4 py-2 bg-primary text-primary-foreground shadow hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    {t('contact.submit')}
                  </button>
                  <div className="text-center text-sm text-muted-foreground">
                    {t('contact.alt')}{' '}
                    <a
                      className="underline"
                      href="mailto:jane.pokkinen@gmail.com"
                    >
                      jane.pokkinen@gmail.com
                    </a>
                  </div>
                </form>
              </div>
            </div>
            <div className="order-1 grid content-start gap-4 md:order-2 md:col-span-2">
              <div className="rounded-2xl border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">
                    {t('contact.title')}
                  </h3>
                </div>
                <div className="p-6 pt-0">
                  <div className="grid gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" /> jane.pokkinen@gmail.com
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" /> +358 ••• ••••
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" /> {t('footer.city')}
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">
                    {t('contact.philosophyTitle')}
                  </h3>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-sm text-muted-foreground">
                    {t('contact.philosophyText')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t py-10">
        <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-sm text-muted-foreground">
            ©️ {new Date().getFullYear()} Jane Pokkinen. {t('footer.rights')}
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#pricing" className="hover:text-foreground">
              {t('nav.pricing')}
            </a>
            <a href="#faq" className="hover:text-foreground">
              {t('nav.faq')}
            </a>
            <a href="#contact" className="hover:text-foreground">
              {t('nav.contact')}
            </a>
          </div>
        </Container>
      </footer>
    </div>
  )
}
export default JanePokkinenSite
