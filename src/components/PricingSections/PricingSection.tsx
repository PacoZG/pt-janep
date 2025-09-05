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
    <section
      id="pricing"
      className="flex flex-row items-center relative overflow-hidden bg-gray-600 bg-opacity-40 md:h-[1024px]"
    >
      <Container>
        <SectionTitle
          className="text-gray-400 dark:text-gray-400"
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
                className={`rounded-2xl border border-gray-300 bg-gray-800 bg-opacity-75 text-gray-300 shadow-sm ${
                  featured ? 'border-red-800 shadow-xl' : ''
                }`}
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <span
                    className={`inline-flex w-fit items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${featured ? 'border-transparent bg-red-800 text-white hover:bg-red-900' : 'border-transparent bg-gray-600 text-gray-300 hover:bg-gray-700'}`}
                  >
                    {tierName}
                  </span>
                  <div className="mt-2 text-4xl font-bold text-white">
                    {t(`pricing.tiers.${i}.price`)}{' '}
                    <span className="text-base font-normal text-gray-400">
                      {t(`pricing.tiers.${i}.period`)}
                    </span>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <ul className="grid gap-2 text-sm text-gray-300">
                    {/* Nested loop for the features of each tier */}
                    {pricingFeatures.map(j => (
                      <li key={j} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 text-red-800" />{' '}
                        {t(`pricing.tiers.${i}.features.${j}`)}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="inline-flex h-9 w-full items-center justify-center whitespace-nowrap rounded-md bg-red-800 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-red-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 mt-4"
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
        <p className="mt-6 text-center text-sm text-gray-400">
          {t('pricing.note')}
        </p>
      </Container>
    </section>
  )
}

export default PricingSection
