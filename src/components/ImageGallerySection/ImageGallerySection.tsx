import React from 'react'
import Container from '@/components/Container/Container'
import SectionTitle from '@/components/SectionTitle/SectionTitle'

const ImageGallerySection: React.FC = () => {
  const galleryImages = [
    'https://placehold.co/600x400/BFDBFE/1F2937?text=Fitness+Shot+1',
    'https://placehold.co/600x400/9CA3AF/1F2937?text=Fitness+Shot+2',
    'https://placehold.co/600x400/60A5FA/1F2937?text=Fitness+Shot+3',
    'https://placehold.co/600x400/9CA3AF/1F2937?text=Fitness+Shot+4',
    'https://placehold.co/600x400/A5B4FC/1F2937?text=Fitness+Shot+5',
    'https://placehold.co/600x400/818CF8/1F2937?text=Fitness+Shot+6',
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
              <img
                src={src}
                className="h-full w-full object-cover"
                alt={`Gallery Image ${i + 1}`}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ImageGallerySection
