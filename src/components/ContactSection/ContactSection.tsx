import Container from '@/components/Container/Container'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import { Mail, MapPin } from 'lucide-react'
import React from 'react'
import { useTranslations } from 'next-intl'
import { Instagram } from '@/components/icons'

const ContactSection = () => {
  const t = useTranslations()

  return (
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
                  {t('contact.alt')}
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
                    <Mail className="h-5 w-5" /> jane.pokkinen@gmail.com
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" /> {t('footer.city')}
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={`https://www.instagram.com/ptbarbarella?igsh=bnB1cXpkMm9pMDVx`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg transition-colors hover:bg-gray-100"
                    >
                      <Instagram className="h-5 w-5" />

                      <span>Find me on Instagram</span>
                    </a>
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
  )
}

export default ContactSection
