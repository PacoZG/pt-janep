import Container from '@/components/Container/Container'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import React from 'react'
import { useTranslations } from 'next-intl'

const FAQSection = () => {
  const t = useTranslations()
  const faqQuestions = [0, 1, 2, 3]

  return (
    <section id="faq" className="bg-gray-200 py-16 md:py-24">
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
  )
}

export default FAQSection
