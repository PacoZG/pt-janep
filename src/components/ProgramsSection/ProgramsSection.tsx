import React, { FC } from 'react'
import { useTranslations } from 'next-intl'
import { Check } from 'lucide-react'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import { LanguageModel } from '@/utils/language/LanguageModel'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

// import required modules
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from 'swiper/modules'

const ProgramsSection: FC = () => {
  const t = useTranslations()
  const useLanguageModel = LanguageModel()

  const programsItems = [0, 1, 2, 3]
  const programPoints = [0, 1, 2]
  const imageList: string[] = [
    'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755427119/vjwvf7qpms8uqu7jetts.jpg',
    'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755427123/kxcvzzebkqers0gx3zh3.jpg',
    'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755463820/a5acetprjnqghyaknucd.jpg',
    'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755427118/tsznr5ml8vvwlv455vqh.jpg',
    'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755427118/x0uiqbalssk1k4x57eph.jpg',
    'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755463692/mweyotba7jqdboewjx8w.jpg',
    'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755463692/cxdzknbhsbehcyn41fqx.jpg',
    'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755463820/nw4bgkxrvpxrv7p29mrp.jpg',
    'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755463695/cymvrwsipldwlujhtnqr.jpg',
    'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755463697/zabwipx5eij2wtvy7g35.jpg',
    'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755427121/jjkr3eaxhzr6wuyfqmmx.jpg',
    'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755427117/edejyvx4wt0zuqwj95xq.jpg',
    'https://swiperjs.com/demos/images/nature-1.jpg',
    'https://swiperjs.com/demos/images/nature-2.jpg',
    'https://swiperjs.com/demos/images/nature-3.jpg',
    'https://swiperjs.com/demos/images/nature-4.jpg',
    'https://swiperjs.com/demos/images/nature-5.jpg',
    'https://swiperjs.com/demos/images/nature-6.jpg',
    'https://swiperjs.com/demos/images/nature-7.jpg',
    'https://swiperjs.com/demos/images/nature-8.jpg',
    'https://swiperjs.com/demos/images/nature-9.jpg',
  ]

  //   {
  //   display: block;
  //   width: 100%;
  // }

  return (
    <section id="programs" className="py-16 md:py-24 bg-gray-1">
      <SectionTitle
        title={t('programs.title')}
        subtitle={t('programs.subtitle')}
        className="text-gray-400"
      />

      <Swiper
        style={{
          width: '100%',
          paddingTop: '50px',
          paddingBottom: '50px',
        }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <div className="">
          {/* Iterate through a static list of indices to get the translated program items */}
          {programsItems.map(i => (
            <SwiperSlide
              key={i}
              style={{
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: '450px',
                height: '250px',
              }}
            >
              <div className="relative" key={i}>
                <div
                  style={{
                    backgroundImage: `url(${imageList[i]})`,
                  }}
                  className="absolute inset-0 bg-cover bg-center h-[250px] w-full rounded-2xl opacity-90"
                />

                <div className="relative ">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight text-gray-50">
                      {t(`programs.items.${i}.title`)}
                    </h3>
                  </div>

                  <div className="p-6 pt-0">
                    <ul className="grid gap-2 text-sm text-blue-200">
                      {/* Nested loop for the points of each program */}
                      {programPoints.map(j => (
                        <li key={j} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-5 w-5 text-blue-200" />{' '}
                          {t(`programs.items.${i}.points.${j}`)}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex gap-3">
                      <a
                        href="#contact"
                        className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md bg-blue-800 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
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
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  )
}

export default ProgramsSection
