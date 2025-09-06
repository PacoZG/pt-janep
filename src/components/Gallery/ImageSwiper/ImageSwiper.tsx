import SectionTitle from '@/components/SectionTitle/SectionTitle'
import React, { FC } from 'react'
import { useTranslations } from 'next-intl'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from 'swiper/modules'
// import './ServiceSection.css'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import 'swiper/css/autoplay'
import Container from '@/components/Container/Container'
import Image from 'next/image'

type ImageSwiperProps = {
  className?: string
}

const ImageSwiper: FC<ImageSwiperProps> = ({ className }) => {
  const t = useTranslations()
  const imageList: string[] = [
    'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1757155195/mkag7swvgkymy2eanejc.jpg',
    'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755427123/kxcvzzebkqers0gx3zh3.jpg',
    'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755427121/jjkr3eaxhzr6wuyfqmmx.jpg',
    'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1618604826/sample.jpg',
    'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1618604837/samples/ecommerce/car-interior-design.jpg',
    'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1618604830/samples/animals/cat.jpg',
  ]

  return (
    <div className={'block md:hidden'}>
      <section
        id="services"
        className={`relative flex flex-col items-center justify-center ${className} `}
      >
        <Container
          className={
            'max-w-screen-2xl pt-9 bg-gray-600 bg-opacity-40 h-[540px]'
          }
        >
          <div className="relative z-10 w-full">
            <SectionTitle
              className="flex flex-col items-center mx-auto max-w-xl text-center pb-8"
              title={t('nav.gallery')}
            />

            <Swiper
              className={''}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              navigation={true}
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
              {imageList.map((url: string, i: number) => {
                return (
                  <SwiperSlide key={i} className="flex justify-center">
                    <div
                      className=" h-96 w-auto rounded-lg overflow-hidden shadow-lg"
                      key={`a-${i}`}
                    >
                      <Image
                        src={url}
                        alt=""
                        width={400}
                        height={400}
                        className="h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default ImageSwiper
