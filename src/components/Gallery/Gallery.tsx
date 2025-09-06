import ImageSwiper from '@/components/Gallery/ImageSwiper/ImageSwiper'
import React from 'react'
import ImageSlider from '@/components/Gallery/ImageSlider/ImageSlider'

const ImageGallery: React.FC = () => {
  return (
    <div>
      <ImageSwiper />

      <ImageSlider />
    </div>
  )
}

export default ImageGallery
