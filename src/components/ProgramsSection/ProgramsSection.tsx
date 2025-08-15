import Container from '@/components/Container/Container'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import { Check } from 'lucide-react'
import React from 'react'
import { useTranslations } from 'next-intl'
import { LanguageModel } from '@/utils/language/LanguageModel'

const ProgramsSection = () => {
  const t = useTranslations()
  const useLanguageModel = LanguageModel()

  const programsItems = [0, 1, 2, 3]
  const programPoints = [0, 1, 2]

  return (
    <section id="programs" className="py-16 md:py-24 bg-gray-100">
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
  )
}

export default ProgramsSection
