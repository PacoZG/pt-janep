'use client'

import React, { FC, useEffect, useRef, useState } from 'react'
import NavBar from '@/components/NavBar/NavBar'
import HeroSection from '@/components/HeroSection/HeroSection'
import TestimonialSection from '@/components/TestimonialSection/TestimonialSection'
import AboutSection from '@/components/AboutSection/AboutSection'
import ServicesSection from '@/components/ServicesSection/ServicesSection'
import FAQSection from '@/components/FAQSection/FAQSection'
import ContactSection from '@/components/ContactSection/ContactSection'
import PricingSection from '@/components/PricingSections/PricingSection'
import Footer from '@/components/Footer/Footer'
import ImageGallery from '@/components/Gallery/Gallery'

// Array of images with a corresponding section key for the background change
const imageConfig = {
  hero: 'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1757099034/iulhfzwmctbqcd8ebpux.jpg',
  gallery:
    'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1757155195/mkag7swvgkymy2eanejc.jpg',
  faq: 'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755463697/zabwipx5eij2wtvy7g35.jpg',
}

// Preload all images to prevent flickering
const preloadImages = (urls: string[]) => {
  urls.forEach((url: string) => {
    const img = new Image()
    img.src = url
  })
}

const JanePokkinenSite: FC = () => {
  const [currentBg, setCurrentBg] = useState<string>(imageConfig.hero)
  const [showTopButton, setShowTopButton] = useState<boolean>(false)

  // Create a ref for each section to observe its intersection
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({})

  // Use a map to simplify section rendering and linking to images
  const sections = [
    { component: <HeroSection />, name: 'hero' },
    { component: <ServicesSection />, name: 'services' },
    { component: <AboutSection />, name: 'about' },
    { component: <ImageGallery />, name: 'gallery' },
    // { component: <ImageSlider />, name: 'slider' },
    { component: <PricingSection />, name: 'pricing' },
    { component: <FAQSection />, name: 'faq' },
    { component: <TestimonialSection />, name: 'testimonials' },
    { component: <ContactSection />, name: 'contact' },
  ]

  useEffect(() => {
    preloadImages(Object.values(imageConfig))
    const localSectionRefs = { ...sectionRefs.current }

    const handleScroll = () => {
      setShowTopButton(window.scrollY > 1000)
    }
    window.addEventListener('scroll', handleScroll)

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionName =
              entry.target instanceof HTMLElement
                ? entry.target.dataset.section
                : undefined
            if (sectionName && sectionName in imageConfig) {
              setCurrentBg(imageConfig[sectionName as keyof typeof imageConfig])
            }
            entry.target.classList.add('fade-in')
          } else {
            entry.target.classList.remove('fade-in')
          }
        })
      },
      {
        root: null,
        rootMargin: '0px 0px -50% 0px',
        threshold: 0.1,
      }
    )

    Object.values(localSectionRefs).forEach(section => {
      if (section instanceof HTMLDivElement) {
        observer.observe(section)
      }
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      Object.values(localSectionRefs).forEach(section => {
        if (section instanceof HTMLDivElement) {
          observer.unobserve(section)
        }
      })
    }
  }, []) // Empty dependency array means this runs once on mount

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <div className="relative min-h-screen text-gray-800">
        <div className="fixed inset-0 z-0">
          {Object.entries(imageConfig).map(([key, url]) => (
            <div
              key={key}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out`}
              style={{
                backgroundImage: `url(${url})`,
                opacity: url === currentBg ? 1 : 0,
              }}
            />
          ))}
        </div>

        <NavBar />

        <div className="relative z-20">
          {sections.map(section => (
            <React.Fragment key={section.name}>
              <div
                ref={el => {
                  sectionRefs.current[section.name] = el
                }}
                data-section={section.name}
                className="section-container"
              >
                {section.component}
              </div>
              {section.name !== 'contact' && <hr className="my-10" />}
            </React.Fragment>
          ))}
          <Footer />
        </div>
      </div>

      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-r from-gray-600 to-blue-500 shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
          aria-label="Back to Top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </>
  )
}

export default JanePokkinenSite
