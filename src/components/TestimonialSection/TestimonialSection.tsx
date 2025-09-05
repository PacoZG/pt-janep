import Container from '@/components/Container/Container'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import { Star } from 'lucide-react'
import React, { FC } from 'react'
import { useTranslations } from 'next-intl'

const TestimonialSection: FC = () => {
  const t = useTranslations()
  const testimonials = [0, 1, 2]

  return (
    <section
      id="testimonials"
      className="flex flex-row items-center relative overflow-hidden bg-gray-600 bg-opacity-40 md:h-[1024px] px-8"
    >
      <Container>
        <SectionTitle
          className="text-gray-900"
          title={t('testimonial.title')}
          subtitle={t('testimonial.subtitle')}
        />
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {testimonials.map((i: number) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-300 bg-gray-800 bg-opacity-75 p-6 text-gray-300 shadow-sm md:h-56"
            >
              <div className="flex items-center gap-1 text-red-800 mb-3">
                {[
                  ...Array(Number(t(`testimonial.testimonials.${i}.stars`))),
                ].map((_, starIndex) => (
                  <Star key={starIndex} className="h-5 w-5 fill-red-800" />
                ))}
                {[
                  ...Array(
                    5 - Number(t(`testimonial.testimonials.${i}.stars`))
                  ),
                ].map((_, starIndex) => (
                  <Star key={starIndex} className="h-5 w-5 text-gray-400" />
                ))}
              </div>

              <p className="mt-4 text-sm italic text-gray-300 md:h-24">
                {t(`testimonial.testimonials.${i}.quote`)}
              </p>

              <p className="mt-4 font-semibold text-gray-300">
                - {t(`testimonial.testimonials.${i}.author`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default TestimonialSection
