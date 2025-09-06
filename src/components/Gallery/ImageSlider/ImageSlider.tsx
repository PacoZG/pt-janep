import React from 'react'
import Image from 'next/image'
import SectionTitle from '@/components/SectionTitle/SectionTitle'

const imageList: string[] = [
  'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1757155195/mkag7swvgkymy2eanejc.jpg',
  'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755427123/kxcvzzebkqers0gx3zh3.jpg',
  'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755427121/jjkr3eaxhzr6wuyfqmmx.jpg',
  'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1618604826/sample.jpg',
  'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1618604837/samples/ecommerce/car-interior-design.jpg',
  'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1618604830/samples/animals/cat.jpg',
]

type ImageSwiperProps = {
  className?: string
}

const ImageSlider: React.FC<ImageSwiperProps> = () => {
  return (
    <div className="hidden md:block flex flex-col justify-center items-center bg-gray-600 bg-opacity-40 h-[580px] pt-9">
      <SectionTitle
        className="text-gray-400"
        title="Gallery"
        // subtitle="A look into my coaching and training sessions."
      />

      <div className="max-w-screen-5xl overflow-hidden py-16 px-32 relative">
        <div className="flex items-center">
          <div className="flex-shrink-0 flex animate-slide items-center">
            {imageList.map((img, i) => (
              <div
                className="mx-4 h-96 w-auto rounded-lg overflow-hidden shadow-lg"
                key={`a-${i}`}
              >
                <Image
                  src={img}
                  alt=""
                  width={400}
                  height={400}
                  className="h-full w-auto object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex-shrink-0 flex animate-slide items-center">
            {imageList.map((img, i) => (
              <div
                className="mx-4 h-96 w-auto rounded-lg overflow-hidden shadow-lg"
                key={`b-${i}`}
              >
                <Image
                  src={img}
                  alt=""
                  width={400}
                  height={400}
                  className="h-full w-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageSlider
