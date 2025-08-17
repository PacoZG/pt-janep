import React, { FC } from 'react'
import Container from '@/components/Container/Container'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import Image from 'next/image'

const ImageGallerySection: FC = () => {
  const galleryImages = [
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

  return (
    <section id="gallery" className="bg-gray-900 bg-opacity-40 py-16 md:py-24">
      <Container>
        <SectionTitle
          className="text-blue-300"
          title="My Work"
          subtitle="A look into my coaching and training sessions."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {galleryImages.map((src: string, i: number) => (
            <div key={i} className="overflow-hidden rounded-xl shadow-lg">
              <Image
                src={src}
                className="h-full w-full object-cover"
                alt={`Gallery Image ${i + 1}`}
                height={1024}
                width={1024}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ImageGallerySection
