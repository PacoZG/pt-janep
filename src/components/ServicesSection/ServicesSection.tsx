import Container from '@/components/Container/Container'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import {
  BookOpen,
  Clock,
  Dumbbell,
  HeartPulse,
  Salad,
  Sparkles,
  Users,
} from 'lucide-react'
import React from 'react'
import { useTranslations } from 'next-intl'

const ServicesSection = () => {
  const t = useTranslations()
  const iconMap = {
    Dumbbell: Dumbbell,
    Users: Users,
    HeartPulse: HeartPulse,
    Salad: Salad,
    Sparkles: Sparkles,
    BookOpen: BookOpen,
  }
  const servicesItems = [0, 1, 2, 3, 4, 5]

  return (
    <section id="services" className="bg-gray-200 py-16 md:py-24">
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
  )
}

export default ServicesSection
