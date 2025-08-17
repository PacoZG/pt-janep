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
import React, { FC } from 'react'
import { useTranslations } from 'next-intl'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Pagination,
  Navigation,
  EffectCoverflow,
  Autoplay,
} from 'swiper/modules'
import './swiper-styles.css'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import 'swiper/css/autoplay'

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
      className="relative text-center bg-gray-200 py-16 md:py-10 md:h-[640px]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755421573/vkci2d0mcqxa6o6cbt1r.jpg)`,
        }}
      />

      <SectionTitle
        className=" mx-auto max-w-xl text-center"
        title={t('services.title')}
        subtitle={t('services.subtitle')}
      />
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 40,
          depth: 150,
          modifier: 8,
          slideShadows: false,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiper"
        spaceBetween={30}
      >
        {/* Iterate through the service items and create a slide for each */}
        {servicesItems.map((i: number) => {
          const IconComponent = iconMap[i] ?? Dumbbell

          return (
            <SwiperSlide key={i}>
              {/* This div now has a fixed width to allow slides to stack next to each other */}
              <div className="flex flex-col items-center gap-6 h-full w-auto md:w-[640px] mx-auto rounded-2xl border-0 text-gray-800 shadow-sm p-12 md:p-24">
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
                  <IconComponent className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-[36px]  font-semibold leading-none tracking-tight text-gray-900">
                  {t(`services.items.${i}.title`)}
                </h3>
                <p className="text-base text-gray-700">
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
    </section>
  )
}

export default ServicesSection
