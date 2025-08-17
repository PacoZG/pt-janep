import React, { FC } from 'react'
import Container from '@/components/Container/Container'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import Image from 'next/image'

const ImageGallerySection: FC = () => {
  const galleryImages = [
    'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755427123/kxcvzzebkqers0gx3zh3.jpg',
    'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755427121/jjkr3eaxhzr6wuyfqmmx.jpg',
    'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755427119/vjwvf7qpms8uqu7jetts.jpg',
    'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755427118/tsznr5ml8vvwlv455vqh.jpg',
    'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755427117/edejyvx4wt0zuqwj95xq.jpg',
    'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755427118/x0uiqbalssk1k4x57eph.jpg',
  ]

  return (
    <section id="gallery" className="bg-gray-200 py-16 md:py-24">
      <Container>
        <SectionTitle
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
