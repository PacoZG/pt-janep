'use client'

import React, { useState } from 'react'
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

// Share menu component for social media links
const ShareMenu = ({ isVisible, onClose }) => {
  const shareUrl = 'https://www.yourwebsite.com' // Replace with the actual URL
  const shareTitle = 'Jane Pokkinen Coaching'
  const shareHashtags = 'personaltrainer,healthcoach'

  if (!isVisible) return null

  return (
    <div className="absolute top-12 left-0 right-0 z-10 rounded-xl border bg-white p-4 shadow-lg">
      <div className="flex flex-col gap-2">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg p-2 transition-colors hover:bg-gray-100"
        >
          {/*<Facebook className="h-5 w-5 text-blue-600" />*/}
          <span>Share on Facebook</span>
        </a>
        <a
          href={`https://www.instagram.com/?url=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg p-2 transition-colors hover:bg-gray-100"
        >
          {/*<Instagram className="h-5 w-5 text-pink-600" />*/}
          <span>Share on Instagram</span>
        </a>
      </div>
    </div>
  )
}

// --- Main Component ---
const JanePokkinenSite = () => {
  const t = useTranslations()
  const useLanguageModel = LanguageModel()
  const [showShareMenu, setShowShareMenu] = useState(false)

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
    'gallery', // Added gallery to navigation
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

  // Testimonial data (New)
  const testimonials = [
    {
      quote:
        "Jane's coaching changed my life. I have more energy, I'm stronger, and I feel more confident than ever before.",
      author: 'Sarah J.',
      stars: 5,
    },
    {
      quote:
        'The personalized plan and constant encouragement made all the difference. Highly recommend!',
      author: 'Mark R.',
      stars: 5,
    },
    {
      quote:
        'As a beginner, I was nervous, but Jane made me feel comfortable and guided me every step of the way.',
      author: 'Laura P.',
      stars: 4,
    },
  ]

  // Placeholder images for the gallery
  const galleryImages = [
    'https://placehold.co/600x400/BFDBFE/1F2937?text=Fitness+Shot+1',
    'https://placehold.co/600x400/9CA3AF/1F2937?text=Fitness+Shot+2',
    'https://placehold.co/600x400/60A5FA/1F2937?text=Fitness+Shot+3',
    'https://placehold.co/600x400/9CA3AF/1F2937?text=Fitness+Shot+4',
    'https://placehold.co/600x400/A5B4FC/1F2937?text=Fitness+Shot+5',
    'https://placehold.co/600x400/818CF8/1F2937?text=Fitness+Shot+6',
  ]

  return (
    // Updated background and text colors to a lighter palette
    <div className="relative min-h-screen scroll-smooth bg-gray-100 text-gray-800">
      {/* Navbar */}
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

      {/* Hero Section */}
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
                  <Coffee className="h-4 w-4 text-blue-600" />{' '}
                  {t('hero.trust3')}
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

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gray-100 py-16 md:py-24">
        <Container>
          <SectionTitle
            title="What clients say"
            subtitle="Don't just take my word for it. Here's what people are saying about their journey with me."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-300 bg-white p-6 text-gray-800 shadow-sm"
              >
                <div className="flex items-center gap-1 text-blue-600">
                  {[...Array(testimonial.stars)].map((_, starIndex) => (
                    <Star key={starIndex} className="h-5 w-5 fill-blue-600" />
                  ))}
                  {[...Array(5 - testimonial.stars)].map((_, starIndex) => (
                    <Star key={starIndex} className="h-5 w-5 text-gray-400" />
                  ))}
                </div>
                <p className="mt-4 text-sm italic text-gray-700">
                  "{testimonial.quote}"
                </p>
                <p className="mt-4 font-semibold text-gray-800">
                  - {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-gray-200">
        <Container>
          <SectionTitle
            title={t('about.title')}
            subtitle={t('about.subtitle')}
          />
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

      {/* Services Section */}
      <section id="services" className="bg-gray-100 py-16 md:py-24">
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
                  className="rounded-2xl border border-gray-300 bg-white text-gray-800 shadow-sm"
                >
                  <div className="flex flex-col space-y-1.5 p-6">
                    <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
                      <IconComponent className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-semibold leading-none tracking-tight text-xl text-gray-900">
                      {t(`services.items.${i}.title`)}
                    </h3>
                    <p className="text-sm text-gray-700">
                      {t(`services.items.${i}.desc`)}
                    </p>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
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
      <section id="programs" className="py-16 md:py-24 bg-gray-200">
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
                className="rounded-2xl border border-gray-300 bg-white text-gray-800 shadow-sm"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight text-gray-900">
                    {t(`programs.items.${i}.title`)}
                  </h3>
                </div>
                <div className="p-6 pt-0">
                  <ul className="grid gap-2 text-sm text-gray-700">
                    {/* Nested loop for the points of each program */}
                    {programPoints.map(j => (
                      <li key={j} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 text-blue-600" />{' '}
                        {t(`programs.items.${i}.points.${j}`)}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex gap-3">
                    <a
                      href="#contact"
                      className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      {useLanguageModel.usersLanguage === 'fi'
                        ? 'Kysy lisää'
                        : 'Ask more'}
                    </a>
                    <a
                      href="#pricing"
                      className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
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

      {/* New Image Gallery Section */}
      <section id="gallery" className="bg-gray-100 py-16 md:py-24">
        <Container>
          <SectionTitle
            title="My Work"
            subtitle="A look into my coaching and training sessions."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {galleryImages.map((src, i) => (
              <div key={i} className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src={src}
                  alt={`Gallery Image ${i + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-200 py-16 md:py-24">
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
                  className={`rounded-2xl border border-gray-300 bg-white text-gray-800 shadow-sm ${
                    featured ? 'border-blue-600 shadow-xl' : ''
                  }`}
                >
                  <div className="flex flex-col space-y-1.5 p-6">
                    <span
                      className={`inline-flex w-fit items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${featured ? 'border-transparent bg-blue-600 text-white hover:bg-blue-700' : 'border-transparent bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                    >
                      {tierName}
                    </span>
                    <div className="mt-2 text-4xl font-bold text-gray-900">
                      {t(`pricing.tiers.${i}.price`)}{' '}
                      <span className="text-base font-normal text-gray-500">
                        {t(`pricing.tiers.${i}.period`)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <ul className="grid gap-2 text-sm text-gray-700">
                      {/* Nested loop for the features of each tier */}
                      {pricingFeatures.map(j => (
                        <li key={j} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 text-blue-600" />{' '}
                          {t(`pricing.tiers.${i}.features.${j}`)}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      className="inline-flex h-9 w-full items-center justify-center whitespace-nowrap rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
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
          <p className="mt-6 text-center text-sm text-gray-500">
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
                className="rounded-2xl border border-gray-300 bg-white text-gray-800 shadow-sm"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight text-lg text-gray-900">
                    {t(`faq.qas.${i}.q`)}
                  </h3>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-gray-700">{t(`faq.qas.${i}.a`)}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-200 py-16 md:py-24">
        <Container>
          <SectionTitle
            title={t('contact.title')}
            subtitle={t('contact.subtitle')}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-5">
            <div className="order-2 rounded-2xl border border-gray-300 bg-white text-gray-800 shadow-sm md:order-1 md:col-span-3">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight text-gray-900">
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
                      className="flex h-9 w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
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
                      className="flex h-9 w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
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
                      className="flex h-9 w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
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
                      className="flex min-h-[60px] w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm shadow-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex h-9 w-full items-center justify-center whitespace-nowrap rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    {t('contact.submit')}
                  </button>
                  <div className="text-center text-sm text-gray-500">
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
              <div className="rounded-2xl border border-gray-300 bg-white text-gray-800 shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight text-gray-900">
                    {t('contact.title')}
                  </h3>
                </div>
                <div className="p-6 pt-0">
                  <div className="grid gap-3 text-sm text-gray-700">
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
              <div className="rounded-2xl border border-gray-300 bg-white text-gray-800 shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight text-gray-900">
                    {t('contact.philosophyTitle')}
                  </h3>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-sm text-gray-700">
                    {t('contact.philosophyText')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
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
    </div>
  )
}
export default JanePokkinenSite
