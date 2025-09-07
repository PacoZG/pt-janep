import ImageSwiper from '@/components/Gallery/ImageSwiper/ImageSwiper'
import React from 'react'
import ImageSlider from '@/components/Gallery/ImageSlider/ImageSlider'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import { useTranslations } from 'next-intl'

const ImageGallery: React.FC = () => {
  const t = useTranslations()

  return (
    <div>
      <SectionTitle
        className="flex flex-col items-center mx-auto max-w-xl text-center pb-8"
        title={t('nav.gallery')}
      />

      <ImageSwiper />

      <ImageSlider />
    </div>
  )
}

export default ImageGallery
