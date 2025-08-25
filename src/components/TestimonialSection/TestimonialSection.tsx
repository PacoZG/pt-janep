import Container from '@/components/Container/Container'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import { Star } from 'lucide-react'
import React, { FC } from 'react'

const TestimonialSection: FC = () => {
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

  return (
    <section
      id="testimonials"
      className="flex flex-row items-center h-full bg-gray-700 bg-opacity-5 dark:bg-gray-900 dark:bg-opacity-40 py-16 md:py-24 md:h-[800px]"
    >
      <Container>
        <SectionTitle
          className="text-gray-900"
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
                {`"${testimonial.quote}"`}
              </p>
              <p className="mt-4 font-semibold text-gray-800">
                - {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default TestimonialSection
