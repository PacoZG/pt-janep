import Container from '@/components/Container/Container'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import { Check } from 'lucide-react'
import React, { FC } from 'react'
import { useTranslations } from 'next-intl'
import { LanguageModel } from '@/utils/language/LanguageModel'

const PricingSection: FC = () => {
  const t = useTranslations()
  const useLanguageModel = LanguageModel()

  const pricingTiers = [0, 1, 2]
  const pricingFeatures = [0, 1, 2]

  return (
    <section id="pricing" className="bg-gray-900 bg-opacity-40 py-16 md:py-24">
      <Container>
        <SectionTitle
          className="text-gray-400"
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
  )
}

export default PricingSection
