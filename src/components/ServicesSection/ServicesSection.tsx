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
import React, { FC } from 'react'
import { useTranslations } from 'next-intl'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from 'swiper/modules'
import './ServiceSection.css'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import 'swiper/css/autoplay'
import Container from '@/components/Container/Container'

const iconMap: Record<number, typeof Dumbbell> = {
  0: Dumbbell,
  1: Users,
  2: HeartPulse,
  3: Salad,
  4: Sparkles,
  5: BookOpen,
}

const ServicesSection: FC = () => {
  const t = useTranslations()
  const servicesItems = [0, 1, 2, 3, 4, 5]

  return (
    <section
      id="services"
      className="relative flex flex-col items-center justify-center md:h-[980px]"
    >
      <Container className={'max-w-screen-2xl pt-9 h-[540px]'}>
        <div
          className="absolute inset-0 bg-cover bg-center h-[540px] md:h-full"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755421573/vkci2d0mcqxa6o6cbt1r.jpg)`,
          }}
        />

        <div className="relative z-10 w-full">
          <SectionTitle
            className="flex flex-col items-center mx-auto max-w-xl text-center"
            title={t('services.title')}
            subtitle={t('services.subtitle')}
          />

          <Swiper
            className={''}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            navigation={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            spaceBetween={30}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            effect="coverflow"
            slidesPerView="auto"
            coverflowEffect={{
              slideShadows: false,
            }}
            breakpoints={{
              768: {
                coverflowEffect: {
                  rotate: 5,
                  stretch: 10,
                  depth: 100,
                  modifier: 12,
                },
              },
            }}
          >
            {/* Iterate through the service items and create a slide for each */}
            {servicesItems.map((i: number) => {
              const IconComponent = iconMap[i] ?? Dumbbell

              return (
                <SwiperSlide key={i}>
                  {/* This div now has a fixed width to allow slides to stack next to each other */}
                  <div className="flex flex-col items-center justify-stretch gap-6 md:gap-6 h-full w-auto md:w-[640px] mx-auto rounded-2xl border-0 text-gray-800 shadow-sm p-10 md:p-24">
                    <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
                      <IconComponent className="h-5 w-5 text-red-600" />
                    </div>

                    <h3 className="text-2xl md:text-4xl text-center  font-semibold leading-none tracking-tight text-gray-900">
                      {t(`services.items.${i}.title`)}
                    </h3>

                    <p className="text-sm md:text-lg text-gray-700 text-center">
                      {t(`services.items.${i}.desc`)}
                    </p>

                    <div className="flex items-center gap-2 text-md text-gray-600">
                      <Clock className="h-4 w-4" /> 60–75 min
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </Container>
    </section>
  )
}

export default ServicesSection
